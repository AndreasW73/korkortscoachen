import { supabase } from 'src/lib/supabase/client';

class FolderService {
  async listObjects(bucketName: string, path: string = "") {
    const { data, error } = await supabase.storage.from(bucketName).list(path, { limit: 100 });
    if (error) {
      console.error(`Error listing objects in "${bucketName}":`, error.message);
      return [];
    }
    return data;
  }

  async createFolder(bucketName: string, folderPath: string): Promise<void> {
    // Check if folder exists by listing its contents
    const { data, error } = await supabase.storage.from(bucketName).list(folderPath, { limit: 1 });

    if (error) {
      console.error(`Failed to check folder "${folderPath}":`, error.message);
      return;
    }

    if (data && data.length > 0) {
      console.info(`Folder "${folderPath}" already exists`);
      return;
    }

    const dummyFile = new File([""], ".keep", { type: "text/plain" });
    const filePath = `${folderPath}/.keep`;

    const { error: uploadError } = await supabase.storage.from(bucketName).upload(filePath, dummyFile, { upsert: false });

    if (uploadError && !uploadError.message.includes("The resource already exists")) {
      console.error(`Failed to create folder "${folderPath}":`, uploadError.message);
    } else {
      console.info(`Folder "${folderPath}" created`);
    }
  }

  async renameFolder(bucketName: string, oldFolderPath: string, newFolderPath: string): Promise<void> {
    const { data, error: listError } = await supabase.storage.from(bucketName).list(oldFolderPath, { limit: 1000 });
    if (listError) {
      console.error(`Failed to list folder "${oldFolderPath}":`, listError.message);
      return;
    }
    if (!data || data.length === 0) {
      console.warn(`No files found in folder "${oldFolderPath}"`);
      return;
    }

    for (const file of data) {
      const oldPath = `${oldFolderPath}/${file.name}`;
      const newPath = `${newFolderPath}/${file.name}`;

      const { data: fileData, error: downloadError } = await supabase.storage.from(bucketName).download(oldPath);
      if (downloadError || !fileData) {
        console.error(`Failed to download "${oldPath}":`, downloadError?.message);
        continue;
      }

      const { error: uploadError } = await supabase.storage.from(bucketName).upload(newPath, fileData, { upsert: true });
      if (uploadError) {
        console.error(`Failed to upload to "${newPath}":`, uploadError.message);
        continue;
      }

      const { error: removeError } = await supabase.storage.from(bucketName).remove([oldPath]);
      if (removeError) {
        console.error(`Failed to remove "${oldPath}":`, removeError.message);
      }
    }
  }

  async deleteFolder(bucketName: string, folderPath: string): Promise<void> {
    const { data, error: listError } = await supabase.storage.from(bucketName).list(folderPath, { limit: 1000 });
    if (listError) {
      console.error(`Failed to list folder "${folderPath}":`, listError.message);
      return;
    }
    if (!data || data.length === 0) {
      console.warn(`No files found in folder "${folderPath}"`);
      return;
    }

    const filesToDelete = data.map(file => `${folderPath}/${file.name}`);
    const { error: deleteError } = await supabase.storage.from(bucketName).remove(filesToDelete);
    if (deleteError) {
      console.error(`Failed to delete files in folder "${folderPath}":`, deleteError.message);
    }
  }
}

export const folderService = new FolderService();
