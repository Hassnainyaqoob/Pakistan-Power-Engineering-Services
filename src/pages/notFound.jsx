import React, { useEffect } from 'react';

const NotFoundPage = () => {
    useEffect(() => {
        const planet = document.querySelector('.planet');
        let posX = 0;
        let posY = 0;
        const stars = document.querySelectorAll('.star');

        const animate = () => {
            posX += (Math.random() - 0.5) * 1.5;
            posY += (Math.random() - 0.5) * 1.5;
            planet.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX / 2}deg)`;

            stars.forEach((star, index) => {
                const speed = 0.5 + index * 0.1;
                let starY = parseFloat(star.style.top || '0') + speed;
                if (starY > window.innerHeight) starY = -10;
                star.style.top = `${starY}px`;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => { }; // Cleanup if needed
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
            <div className="text-center relative">
                {/* Animated Stars */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="star w-2 h-2 bg-yellow-400 rounded-full absolute animate-pulse"
                        style={{
                            left: `${Math.random() * 100}vw`,
                            top: `${Math.random() * 100}vh`,
                            opacity: Math.random(),
                        }}
                    ></div>
                ))}
                {/* Animated Planet */}
                <div className="planet w-32 h-32 bg-brandRed rounded-full absolute animate-bounce"></div>
                <h1 className="text-6xl font-bold mt-16 z-10">404</h1>
                <p className="text-xl mt-4 z-10">Oops! Page Not Found.</p>
                <p className="mt-2 z-10">
                    <a href="/" className="text-brandRed hover:underline">
                        Go Back Home
                    </a>
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
