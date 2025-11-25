import React from 'react';

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[500px] flex items-center"
            style={{
                backgroundImage: 'url("https://i.postimg.cc/K82Fbtmv/Banner-min.jpg")',
            }}
        >

            {/* Text content */}
            <div className="relative max-w-xl text-left text-white p-6 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Bid Unique Items From Around the World 
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                </p>
                <button className="btn rounded-3xl  btn-lg font-extrabold">
                    Expore Auctions
                </button>
            </div>
        </div>
    );
};

export default Banner;