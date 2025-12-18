import { supabase } from "src/lib/supabase/client";


class ImageService {
  private bucketName = "uploads"; // set your actual bucket name here

  async uploadImages(files: File[], folder: string = "uploads"): Promise<string[]> {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      if (!file || !file.name) {
        console.warn("Skipped uploading an invalid or undefined file.", file);
        continue;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = file.name; // optionally sanitize this name
      const filePath = `${folder}/${fileName}`;

      const { error } = await supabase.storage
        .from(this.bucketName)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true
        });

      if (error) {
        console.error("Error uploading file:", error.message);
        continue;
      }

      const { data } = supabase.storage
        .from(this.bucketName)
        .getPublicUrl(filePath);

      if (data?.publicUrl) {
        uploadedUrls.push(data.publicUrl);
      }
    }

    return uploadedUrls;
  }

  async fileExists(path: string): Promise<boolean> {
    const folderPath = path.substring(0, path.lastIndexOf("/"));
    const fileName = path.split("/").pop();

    if (!folderPath || !fileName) return false;

    const { data, error } = await supabase.storage
      .from(this.bucketName)
      .list(folderPath);

    if (error || !data) {
      console.error("Error checking file existence:", error?.message);
      return false;
    }

    return data.some(file => file.name === fileName);
  }

  async filesExist(paths: string[]): Promise<Record<string, boolean>> {
    const result: Record<string, boolean> = {};
    const folderGroups: Record<string, Set<string>> = {};

    // Group files by their folder
    for (const path of paths) {
      const folder = path.substring(0, path.lastIndexOf("/"));
      const fileName = path.split("/").pop();

      if (!folder || !fileName) {
        result[path] = false;
        continue;
      }

      if (!folderGroups[folder]) {
        folderGroups[folder] = new Set();
      }
      folderGroups[folder].add(fileName);
    }

    // Check each folder once
    for (const [folder, fileNames] of Object.entries(folderGroups)) {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list(folder);

      if (error || !data) {
        console.error(`Failed to list folder "${folder}":`, error?.message);
        for (const name of fileNames) {
          const fullPath = `${folder}/${name}`;
          result[fullPath] = false;
        }
        continue;
      }

      const existingFiles = new Set(data.map(f => f.name));

      for (const name of fileNames) {
        const fullPath = `${folder}/${name}`;
        result[fullPath] = existingFiles.has(name);
      }
    }

    return result;
  }



  async removeImage(publicUrl: string): Promise<void> {
    const path = publicUrl.split(`/storage/v1/object/public/${this.bucketName}/`)[1];
    if (!path) return;

    const { error } = await supabase.storage
      .from(this.bucketName)
      .remove([path]);

    if (error) {
      console.error("Failed to remove image:", error.message);
    }
  }

  async removeAll(publicUrls: string[]): Promise<void> {
    const paths = publicUrls
      .map(url => url.split(`/storage/v1/object/public/${this.bucketName}/`)[1])
      .filter(Boolean);

    if (paths.length === 0) return;

    const { error } = await supabase.storage
      .from(this.bucketName)
      .remove(paths);

    if (error) {
      console.error("Failed to remove all images:", error.message);
    }
  }
}

export const imageService = new ImageService();
