import React from 'react';
import { FaRegHeart } from "react-icons/fa";


const Table = ({ table, handleBidItems }) => {
    return (
        // <div>
        //     <tr>
        //         <td>
        //             <div className="flex items-center gap-4">
        //                 <div className="avatar">
        //                     <div className="h-12 w-12">
        //                         <img
        //                             src={table.image}alt="AuctionGallery Images" />
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <div className="">{table.title}</div>
        //                 </div>
        //             </div>
        //         </td>
        //         <td>
        //             <div>{table.currentBidPrice}</div>
        //         </td>
        //         <th>
        //             <div className="">{table.timeLeft}</div>
        //         </th>
        //         <th>
        //             <label>
        //                 <input type="checkbox" className="checkbox" />
        //             </label>
        //         </th>
        //     </tr>

        // </div>


            <tbody className=''>
                <tr className=''>
                    <th className='h-12'><img className='h-12 w-20' src={table.image} alt="" /></th>
                    <td className='h-12'> {table.title} </td>
                    <td className='h-12'>${table.currentBidPrice.toLocaleString()}</td>
                    <td className='h-12'>{table.timeLeft}</td>
                    <th className='h-12'>
                        <button onClick={()=>handleBidItems(table)}><FaRegHeart  size={25}/></button>
                    </th>
                </tr>
            </tbody>
    );
};

export default Table;



// love icon change hobe 
// alert asbe & abar nije nije coleo jabe
// je item e click hoiche seta image title bid and remove icon soho show korbe
// total amount jog korbe 