// app/page.js
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/product-card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useCartStore from '../store'; // Adjust path if needed
import '../styles/home.css'; // Ensure the path to home.css is correct

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const totalItemsInCart = useCartStore(state => state.totalItemsInCart());
  const cart = useCartStore(state => state.cart);
  const setProducts = useCartStore(state => state.setProducts);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('/api/products');
        setFetchedProducts(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    }

    fetchProducts();
  }, [setProducts]);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Fresh Vegetables & Fruits</h1>
        <p>Your one-stop online store for fresh, organic produce.</p>
      </header>
      <section className="product-grid">
        {fetchedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </section>
      <div className="cart-button-container">
        <Link href="/cart">
          <button className="view-cart-btn" disabled={Object.keys(cart).length === 0 || Object.values(cart).every(qty => qty === 0)}>
            View Cart ({totalItemsInCart})
          </button>
        </Link>
      </div>

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading products...</p>}
    </div>
  );
}
