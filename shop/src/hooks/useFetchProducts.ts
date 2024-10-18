// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import { fetchProducts } from '../actions/productActions';

// Define the Product interface based on the data structure you're fetching
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const useFetchProducts = () => {
  // Set the state types properly to avoid `any[]`
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data: Product[] = await fetchProducts(); // Ensure data is typed correctly
        setProducts(data);
      } catch (err: unknown) {  // Use `unknown` for catch blocks instead of `any`
        if (err instanceof Error) {
          setError(err.message);  // Safely access error message
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};
