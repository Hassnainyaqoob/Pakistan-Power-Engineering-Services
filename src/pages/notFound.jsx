import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    useEffect(() => {
        const planet = document.querySelector('.planet');
        const stars = document.querySelectorAll('.star');
        let posX = 0;
        let posY = 0;
        let frameId;

        const animate = () => {
            if (!planet) return;
            posX += (Math.random() - 0.5) * 1.5;
            posY += (Math.random() - 0.5) * 1.5;
            planet.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX / 2}deg)`;

            stars.forEach((star, index) => {
                const speed = 0.5 + index * 0.1;
                let starY = parseFloat(star.style.top || '0') + speed;
                if (starY > window.innerHeight) starY = -10;
                star.style.top = `${starY}px`;
            });

            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 pt-24">
            <div className="text-center relative px-6">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="star w-2 h-2 bg-yellow-400 rounded-full absolute animate-pulse pointer-events-none"
                        style={{
                            left: `${(i * 10 + 7) % 95}vw`,
                            top: `${(i * 13 + 11) % 85}vh`,
                            opacity: 0.6,
                        }}
                    />
                ))}
                <div className="planet w-24 h-24 bg-brandRed/15 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">⚡</span>
                </div>
                <h1 className="text-6xl font-extrabold text-blueColor z-10">404</h1>
                <p className="text-xl text-gray-600 mt-3 z-10">Page Not Found</p>
                <div className="mt-6 z-10">
                    <Link
                        to="/"
                        className="inline-block bg-brandRed hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
