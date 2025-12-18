import { supabase } from 'src/lib/supabase/client';

class UserService {
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) throw new Error('Failed to fetch user');
    return user;
  }

  async updateMetadata(newMetadata: Record<string, any>) {
    const { data, error } = await supabase.auth.updateUser({
      data: newMetadata,
    });

    if (error) throw new Error('Failed to update user metadata');
    return data.user;
  }

  async getMetadata<T extends object>(): Promise<T> {
    const user = await this.getCurrentUser();
    return user?.user_metadata as T;
  }

  async linkFarm(farmId: string) {
    const metadata = await this.getMetadata<{ farmIds?: string[] }>();
    const updatedFarmIds = Array.from(new Set([...(metadata.farmIds || []), farmId]));

    return this.updateMetadata({ farmIds: updatedFarmIds });
  }

  // ...
  async getLinkedFarmIds(): Promise<string[]> {
    const metadata = await this.getMetadata<{ farmIds?: string[] }>();
    return metadata.farmIds || [];
  }

  async clearLinkedFarms() {
    return this.updateMetadata({ farmIds: null });
  }
  async unlinkFarm(farmId: string) {
    const metadata = await this.getMetadata<{ farmIds?: string[] }>();
    const updatedFarmIds = (metadata.farmIds || []).filter(id => id !== farmId);

    return this.updateMetadata({
      farmIds: updatedFarmIds.length > 0 ? updatedFarmIds : null,
    });
  }


  async getLinkedFarms() {
    const farmIds = await this.getLinkedFarmIds();

    if (farmIds.length === 0) return [];

    console.log(farmIds)

    return [farmIds.map(p => p)];
  }

}

export const userService = new UserService();
