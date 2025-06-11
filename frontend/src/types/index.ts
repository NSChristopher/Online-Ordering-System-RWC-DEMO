export interface User {
  id: number;
  email: string;
  username: string;
  createdAt?: string;
}

export interface Post {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface CreatePostData {
  title: string;
  content?: string;
  published?: boolean;
}

export interface UpdatePostData {
  title?: string;
  content?: string;
  published?: boolean;
}

// Menu and Order types
export interface MenuItem {
  id: number;
  storeId: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  available: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface OrderItem {
  id?: number;
  orderId?: number;
  menuItemId: number;
  quantity: number;
  name?: string;
  price?: number;
  createdAt?: string;
}

export interface Order {
  id?: number;
  storeId: number;
  customerName: string;
  customerContact: string;
  status?: string;
  items?: OrderItem[];
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderResponse {
  orderId: number;
  status: string;
  message: string;
}