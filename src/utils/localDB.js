
const getAllReadListFromLocalDB = ()=>{
 const allReadList = localStorage.getItem('readList');

 if(allReadList) return JSON.parse(allReadList);
 return []
}
const addToLocalDB =(book)=>{
 const allBooks = getAllReadListFromLocalDB();
 const isAlreadyExist = allBooks.find(bk => bk.bookId ===book.bookId)
 if(!isAlreadyExist){
    allBooks.push(book);
    localStorage.setItem('readList', JSON.stringify(allBooks))
 }
}
export {getAllReadListFromLocalDB, addToLocalDB}

const getAllWishListFromLocalDB=()=>{
const allWishList = localStorage.getItem('wishList');
if(allWishList) return JSON.parse(allWishList);
return [];
}

const addWishListToLocalDB=(book)=>{
const allWishBook = getAllWishListFromLocalDB();
const isAllReadyWishExist = allWishBook.find(bk=>bk.bookId===book.bookId);

if(!isAllReadyWishExist){
    allWishBook.push(book);
    localStorage.setItem('wishList', JSON.stringify(allWishBook))
}
}
export {getAllWishListFromLocalDB,addWishListToLocalDB}