import { supabase } from 'src/lib/supabase/client';

class BucketService {
  async createBucket(bucketName: string): Promise<void> {
    const exists = await this.bucketExists(bucketName);
    if (exists) {
      console.info(`Bucket "${bucketName}" already exists`);
      return;
    }

    const { error } = await supabase.storage.createBucket(bucketName, { public: true });
    if (error) {
      console.error(`Failed to create bucket "${bucketName}":`, error.message);
    } else {
      console.info(`Bucket "${bucketName}" created`);
    }
  }


  async listBuckets() {
    const { data, error } = await supabase.storage.listBuckets();
    if (error) {
      console.error("Failed to list buckets:", error.message);
      return [];
    }
    return data;
  }

  async bucketExists(bucketName: string): Promise<boolean> {
    const { data, error } = await supabase.storage.listBuckets();
    return !!data?.find(bucket => bucket.name === bucketName) && !error;
  }

  async deleteBucket(bucketName: string): Promise<void> {
    const { error } = await supabase.storage.deleteBucket(bucketName);
    if (error) {
      console.error(`Failed to delete bucket "${bucketName}":`, error.message);
    }
  }
}

export const bucketService = new BucketService();
