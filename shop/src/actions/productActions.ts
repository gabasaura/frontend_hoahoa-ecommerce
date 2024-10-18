// src/actions/productActions.ts
import { Product } from '../pages/ProductPage'; // Import the interface

export const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.example.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  export const fetchProductById = async (id: string): Promise<Product> => {
    try {
      const response = await fetch(`https://api.example.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch product with id: ${id}`);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error fetching product with id ${id}:`, error.message);
      }
      throw error;
    }
  };