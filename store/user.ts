import { mock_user } from '@/mock_data';
import { create } from 'zustand';

export const userStore = create((set) => ({
  user: mock_user
}))