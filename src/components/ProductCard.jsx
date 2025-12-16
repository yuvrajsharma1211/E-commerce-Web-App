import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-cron-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cron-teal/20 transition-all duration-300 group flex flex-col h-full border border-white/5 hover:border-cron-teal/50 relative">
            <div className="relative overflow-hidden aspect-[4/3] p-6 bg-white flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-cron-teal text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {product.discount}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-2">
                    <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                        {product.rating} ★
                    </span>
                    <span className="text-gray-500 text-xs">842 Ratings</span>
                </div>

                <h3 className="text-cron-text font-medium text-sm mb-2 line-clamp-2 leading-relaxed flex-grow group-hover:text-cron-teal transition-colors">
                    {product.title}
                </h3>

                <div className="mt-auto pt-2 border-t border-white/5">
                    <div className="text-lg font-bold text-white mb-3">
                        {product.price}
                    </div>

                    <button className="w-full bg-transparent border border-gray-600 text-white hover:border-cron-teal hover:bg-cron-teal hover:text-white font-medium py-2 rounded-lg transition-all duration-300 active:scale-95 text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
