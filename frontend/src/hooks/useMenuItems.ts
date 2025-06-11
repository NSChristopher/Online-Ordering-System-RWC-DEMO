import { useState, useEffect } from 'react';
import { MenuItem, CreateMenuItemData, UpdateMenuItemData } from '@/types';
import api from '@/lib/api';
import { toast } from 'sonner';

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await api.get('/menu-items');
      setMenuItems(response.data);
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to fetch menu items';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const createMenuItem = async (data: CreateMenuItemData) => {
    try {
      const response = await api.post('/menu-items', data);
      setMenuItems(prev => [...prev, response.data]);
      toast.success('Menu item created successfully!');
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to create menu item';
      toast.error(message);
      throw error;
    }
  };

  const updateMenuItem = async (id: number, data: UpdateMenuItemData) => {
    try {
      const response = await api.patch(`/menu-items/${id}`, data);
      setMenuItems(prev => 
        prev.map(item => item.id === id ? response.data : item)
      );
      toast.success('Menu item updated successfully!');
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to update menu item';
      toast.error(message);
      throw error;
    }
  };

  const deleteMenuItem = async (id: number) => {
    try {
      await api.delete(`/menu-items/${id}`);
      setMenuItems(prev => prev.filter(item => item.id !== id));
      toast.success('Menu item deleted successfully!');
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to delete menu item';
      toast.error(message);
      throw error;
    }
  };

  return {
    menuItems,
    loading,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    refetch: fetchMenuItems,
  };
};