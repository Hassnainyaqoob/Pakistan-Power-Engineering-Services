import React from 'react';

export const OfferingsCard = ({ image, title, subtitle }) => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={image} alt={title} loading="lazy" className="w-full h-64 object-cover" />
            <div className="p-5">
                <h3 className="text-2xl font-bold text-blueColor">{title}</h3>
                <p className="text-gray-600 font-bold text-base mt-1">{subtitle}</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-orange-500 to-purple-700 rounded-full"></div>
            </div>
        </div>
    );
};
