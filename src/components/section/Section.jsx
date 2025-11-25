import React, { useEffect, useState } from 'react';
import Table from '../table/Table';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";





const Section = () => {

    const [section, setSection] = useState([])
    const [favoritesItem, setFavoritesItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch("bidItems.json")
            .then(res => res.json())
            .then(data => setSection(data))
    }, []);

    const handleAddFavoriteItems = (table) => {
        const iconAdded = favoritesItem.find(favorites => favorites.id === table.id);
        if (!iconAdded) {
            setFavoritesItem([...favoritesItem, table]);
            setTotalPrice(totalPrice + table.currentBidPrice);
        };
    };
    const handleRemoveFavoriteItems = (id, productPrice) => {
        setFavoritesItem(favoritesItem.filter(favorites => favorites.id !== id));
        setTotalPrice(totalPrice - productPrice);
    };


    return (
        <div className='bg-blue-100 pt-10 '>
            <h1 className='ml-14 mt-14 font-bold text-4xl'>Active Auctions</h1>
            <p className='ml-14 my-4'>Discover and bid on extraordinary items</p>

            {/* Main Section */}
            <div className='main-section flex mx-14 pb-14 gap-4 '>

                {/* Left Section */}
                <div className='left-section w-[65%]'>

                    {/* Table main DIV Section */}
                    <table className="table rounded-2xl bg-white">
                        <thead className='border-b-2'>
                            <tr >
                                <th>Items</th>
                                <th></th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>

                        </thead>
                        <tbody>
                            {section.map((table) => (
                                <tr key={table.id}>
                                    <td className='flex items-center gap-8'>
                                        <img src={table.image} className='w-24 h-24 rounded-2xl' />
                                        {table.title}
                                    </td>
                                    <td></td>
                                    <td>${table.currentBidPrice}</td>
                                    <td>{table.timeLeft}</td>
                                    <td>
                                        <button
                                            disabled={favoritesItem.find(favorites => favorites.id === table.id)}
                                            onClick={() => handleAddFavoriteItems(table)}
                                            className={`p-2 rounded-full ${favoritesItem.find(favorites => favorites.id === table.id)
                                                ? "text-red-500"
                                                : "text-gray-500"
                                                }`}
                                        >
                                            <FaHeart size={25} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>



                {/* Right Section */}
                <div className='right-section w-[35%]'>
                    <div className="rounded-2xl bg-white pt-2">
                        <h2 className='flex justify-center items-center font-bold text-3xl gap-2 pb-1'>❤️ Favorite Items</h2>
                        <div className='border-t-2 px-3'>
                            {favoritesItem.length === 0
                                ? (
                                    <div>
                                        <p className='h-12 flex justify-center font-bold text-2xl pt-3'>No Favorites yet  
                                        </p>
                                        <p className='font-extralight flex justify-center p-5'>Click the heart icon on any item  to add it to your favorites... <FaHeart size={25} />
                                        </p>
                                    </div>
                                )
                                : (
                                    <ul>
                                        {favoritesItem.map((favorites) => (
                                            <li key={favorites.id} className='flex justify-between items-center py-2 border-b-1'>
                                                <td><img src={favorites.image} className='w-16 h-16 rounded-xl' />
                                                </td>
                                                <td>{favorites.title}</td>
                                                <td>${favorites.currentBidPrice}</td>

                                                <td>
                                                    <button
                                                        onClick={() => handleRemoveFavoriteItems(favorites.id, favorites.currentBidPrice)}
                                                        className='"text-red-500"'
                                                    >
                                                        <FcCancel size={25} />
                                                    </button>
                                                </td>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            <div className='flex justify-between p-3'>
                                <h2 className='font-bold '>Total bids Amount: </h2>
                                <h2 className='font-bold'>${totalPrice}</h2>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Section;