import { useState, useEffect } from 'react';
import { MenuItem } from '@/types';
import api from '@/lib/api';
import { toast } from 'sonner';

export const usePublicMenu = (storeId: number | null) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (storeId) {
      fetchMenu(storeId);
    }
  }, [storeId]);

  const fetchMenu = async (storeId: number) => {
    try {
      setLoading(true);
      const response = await api.get(`/menu?storeId=${storeId}`);
      setMenuItems(response.data);
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to fetch menu';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    menuItems,
    loading,
    refetch: () => storeId && fetchMenu(storeId),
  };
};