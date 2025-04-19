// app/components/product-card.js
'use client';

import React, { useState, useEffect } from 'react';
import styles from './product-card.module.css';
import Image from 'next/image';

export default function ProductCard({ product, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);

  // Handle incrementing quantity
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
    onQuantityChange(product.id, quantity + 1);  // Correct the quantity sent to parent
  };

  // Handle decrementing quantity
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      onQuantityChange(product.id, quantity - 1);  // Correct the quantity sent to parent
    }
  };

  // Handle manual input change for quantity
  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);  // Correct the quantity sent to parent
    }
  };

  // Reset quantity when a new product is loaded
  useEffect(() => {
    setQuantity(0);
  }, [product.id]);

  // Debugging: Log the image URL to ensure it is correct
  useEffect(() => {
    console.log('Product Image URL:', product.image_url);  // Debugging: Check image URL
  }, [product.image_url]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* Ensure correct image path */}
        <Image
  src={product.image}
  alt={product.name}
  width={300}
  height={200}
  style={{ objectFit: 'cover' }}
/>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>₹{product.price} / kg</p>
        <div className={styles.quantityControl}>
          <button onClick={handleDecrement} className={styles.button}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            className={styles.input}
            min="0"  // Prevent negative input
          />
          <button onClick={handleIncrement} className={styles.button}>+</button>
        </div>
      </div>
    </div>
  );
}
