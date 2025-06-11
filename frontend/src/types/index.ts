export interface User {
  id: number;
  email: string;
  createdAt?: string;
}

export interface Store {
  id: number;
  ownerId: number;
  name: string;
}

export interface MenuItem {
  id: number;
  storeId: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface CreateMenuItemData {
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export interface UpdateMenuItemData {
  name?: string;
  price?: number;
  description?: string;
  imageUrl?: string;
}