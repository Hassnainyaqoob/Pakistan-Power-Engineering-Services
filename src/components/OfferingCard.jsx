import React from 'react';

export const OfferingsCard = ({ image, title, subtitle, description, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="w-full h-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col group cursor-pointer border border-gray-100"
        >
            <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-[#C00000] text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                    View Details
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blueColor leading-tight group-hover:text-[#C00000] transition-colors">{title}</h3>
                <p className="text-brandRed font-bold text-xs mt-1 uppercase tracking-wider">{subtitle}</p>
                {description && <p className="text-gray-600 text-sm mt-3 leading-relaxed flex-grow">{description}</p>}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-blueColor group-hover:text-[#C00000]">
                    <span>Explore Service</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
                <div className="mt-2 h-1 bg-gradient-to-r from-brandRed to-blueColor rounded-full w-16 group-hover:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};
