"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Product from '../product'; // Update the path as needed

const ProductPage = () => {
    const router = useRouter();

    // You can fetch product details based on productId

    // Example product data, replace this with your actual data
    const productData = {
        title: 'Product Title',
        price: '$19.99',
    };

    return (
        <div className="px-5 sm:px-6 lg:px-12 flex justify-center h-screen">
            <main className="bg-white text-center p-4 w-1/2">
                <Product title={productData.title} price={productData.price} />
                <button className='bg-black text-white text-lg p-4 my-4'>Buy now</button>
                {/* Additional product details */}
            </main>
        </div>
    );
};

export default ProductPage;
