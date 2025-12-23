import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Dashboard = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-cron-darker/90 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8 border-b border-white/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1400px] mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-tr from-cron-teal to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            C
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                Croma<span className="text-cron-teal">Tech</span>
                            </h1>
                        </div>
                    </div>

                    <div className="relative w-full md:max-w-xl group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-500 group-focus-within:text-cron-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="block w-full pl-10 pr-3 py-2.5 bg-cron-card border border-white/10 rounded-lg leading-5 text-white placeholder-gray-500 focus:outline-none focus:bg-cron-card focus:border-cron-teal sm:text-sm transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-white transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-cron-teal text-[10px] text-white font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </button>
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-cron-card">
                            U
                        </div>
                    </div>
                </div>
            </header>

            {/* Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-12 h-[300px] md:h-[400px] group">
                <img
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1600&q=80"
                    alt="Hero Banner"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center">
                    <div className="px-8 md:px-12 max-w-2xl">
                        <span className="text-cron-teal font-bold tracking-wider uppercase text-sm mb-2 block">Limited Time Offer</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Upgrade Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Digital Life</span>
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">Experience the next generation of electronics with our premium selection.</p>
                        <button className="bg-cron-teal hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-cron-teal/25">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {['Laptops', 'Mobiles', 'Audio', 'Cameras'].map((cat, i) => (
                    <div key={i} className="bg-cron-card p-6 rounded-xl border border-white/5 hover:border-cron-teal/50 transition-all cursor-pointer group text-center">
                        <h3 className="text-white font-medium group-hover:text-cron-teal transition-colors">{cat}</h3>
                        <p className="text-xs text-gray-500 mt-1">View Collection</p>
                    </div>
                ))}
            </div>

            {/* Product Grid */}
            <div className="space-y-6">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Trending Products</h2>
                        <p className="text-gray-400 text-sm">Handpicked selection just for you</p>
                    </div>
                    <button className="text-cron-teal text-sm font-medium hover:text-white transition-colors">View All &rarr;</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            

            <footer className="mt-20 border-t border-white/5 pt-8 pb-4 text-center text-gray-600 text-sm">
                <p>&copy; 2025 CromaTech. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
