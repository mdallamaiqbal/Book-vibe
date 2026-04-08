import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
const BookProvider = ({children}) => {
   const [readList, setReadList] =useState([]);
   const [wishlist,setWishlist] = useState([])
   const handleMarkAsRead=(currentBook)=>{
    //step 1: store book id or store book object
    //step 2: where to store
    //step 3: array or collection
    //step 4: if the book is already exist then show a alert or toast
    //step 5: if not them add the book in the array or collection
    const isExistBook = readList.find((book)=>book.bookId === currentBook.bookId);
    if(isExistBook){
      toast.error('The book is already exist')
    }else{
      setReadList([...readList, currentBook])
      toast.success(`${currentBook.bookName} is added to list`)
    }
}
   const handleWishList=(currentBook)=>{
    //step 1: store book id or store book object
    //step 2: where to store
    //step 3: array or collection
    //step 4: if the book is already exist then show a alert or toast
    //step 5: if not them add the book in the array or collection
    const isExistReadList = readList.find(book => book.bookId === currentBook.bookId)
    const isExistBook = wishlist.find((book)=>book.bookId === currentBook.bookId);
    if(isExistReadList){
        toast.error("This book is already in read list");
        return;
    }
    if(isExistBook){
      toast.error('The book is already exist')
    }else{
      setWishlist([...wishlist, currentBook])
      toast.success(`${currentBook.bookName} is added to Wish list`)
    }
}
    const data ={
        readList, 
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;