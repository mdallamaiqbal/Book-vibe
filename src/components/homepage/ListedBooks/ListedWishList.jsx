import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../context/BookContext';
import BookCard from '../../UI/BookCard';

const ListedWishList = ({sortingType}) => {
        const {wishlist} = useContext(BookContext);
        const [filteredReadList,setFilteredReadList]=useState(wishlist)
            useEffect(()=>{
              if(sortingType){
                if(sortingType === 'pages'){
                 const sortedData = [...wishlist].sort((a,b)=> a.totalPages - b.totalPages)
                 setFilteredReadList(sortedData);
                }else if(sortingType === 'rating'){
                const sortedData = [...wishlist].sort((a,b)=> a.rating - b.rating)
                 setFilteredReadList(sortedData)
              }
              }
            },[sortingType,wishlist])
        if(filteredReadList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
        }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
             {
            filteredReadList.map((book,ind)=> <BookCard key={ind} book={book}/> )
          }
          </div>
        </div>
    );
};

export default ListedWishList;