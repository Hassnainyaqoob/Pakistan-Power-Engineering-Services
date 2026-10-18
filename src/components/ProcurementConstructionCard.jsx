import React from 'react';

export const LoadAssessmentCard = ({
    stepNumber = "STEP 1",
    title = "Load\nAssessment",
    subtitle = "",
    description = "Before specific electric power sources and distribution systems can be considered, realistic preliminary load",
    imageUrl = null,
    reversecond = false
}) => {
    // Convert title to handle line breaks
    const titleLines = title.split('\n');

    return (
        <div className={`relative flex bg-white shadow-lg overflow-hidden max-w-7xl h-auto flex-col sm:flex-row mx-4 sm:mx-0 rounded-xl sm:rounded-none ${reversecond ? 'flex-row-reverse' : ''}`} style={{ maxWidth: '100%' }}>
            {/* Left/Right side - Image */}
            <div className="w-full sm:w-3/5 relative">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title.replace('\n', ' ')}
                        loading="lazy"
                        className="w-full h-[320px] object-cover"
                    />
                ) : (
                    <div className="h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                        {/* Industrial background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                                {Array.from({ length: 48 }).map((_, i) => (
                                    <div key={i} className="border border-gray-400"></div>
                                ))}
                            </div>
                        </div>

                        {/* Simulated workers */}
                        <div className="relative z-10 flex items-center space-x-8">
                            {/* Worker 1 - with safety vest */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center mb-2">
                                    <div className="w-8 h-8 bg-red-700 rounded-full"></div>
                                </div>
                                <div className="w-20 h-24 bg-red-500 rounded-lg relative">
                                    <div className="absolute top-2 left-2 right-2 h-4 bg-brandRed rounded"></div>
                                    <div className="absolute bottom-2 left-2 right-2 h-16 bg-gray-800 rounded"></div>
                                </div>
                            </div>

                            {/* Worker 2 - with hard hat */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center mb-2 relative">
                                    <div className="w-8 h-8 bg-red-700 rounded-full"></div>
                                    <div className="absolute -top-2 w-12 h-6 bg-brandRed rounded-full"></div>
                                </div>
                                <div className="w-20 h-24 bg-blue-600 rounded-lg relative">
                                    <div className="absolute top-2 left-1 right-1 h-4 bg-white rounded opacity-80"></div>
                                    <div className="absolute bottom-2 left-2 right-2 h-16 bg-blue-800 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Laptop representation */}
                        <div className="absolute bottom-8 left-8 w-16 h-10 bg-gray-300 rounded transform -rotate-12">
                            <div className="w-full h-6 bg-gray-800 rounded-t"></div>
                            <div className="w-full h-4 bg-gray-200 rounded-b"></div>
                        </div>

                        {/* Industrial equipment silhouettes */}
                        <div className="absolute top-4 right-4 space-y-2">
                            <div className="w-8 h-12 bg-blue-600 rounded opacity-70"></div>
                            <div className="w-6 h-8 bg-gray-600 rounded opacity-50"></div>
                            <div className="w-10 h-6 bg-gray-500 rounded opacity-60"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Right/Left side - Content */}
            <div className="w-full sm:w-2/5 flex flex-col justify-center bg-gray-50" style={{ padding: '0 16px' }}>
                <div className="py-8">
                    <div className="text-brandRed font-semibold text-lg italic mb-4">
                        {stepNumber}
                    </div>
                    <h2 className="text-3xl font-bold text-blueColor mb-4 leading-tight">
                        {titleLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < titleLines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h2>
                    {subtitle && (
                        <h3 className="text-xl font-medium text-blueColor mb-4">
                            {subtitle}
                        </h3>
                    )}
                    <p className="text-blueCobrandRedlor leading-relaxed mb-6">
                        {description}
                    </p>
                </div>
            </div>

            {/* Gradient accent bar */}
            <div className={`hidden sm:block absolute top-0 bottom-0 w-2 bg-gradient-to-b from-brandRed to-purple-700 ${reversecond ? 'left-0' : 'right-0'}`}></div>
        </div>
    );
};
