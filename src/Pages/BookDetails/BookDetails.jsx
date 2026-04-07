
import { FaRegStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
const BookDetails = () => {
    const {booksId} =useParams();
    const books = useLoaderData();
    const expectedBook = books.find(book=>book.bookId === Number(booksId))
   const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook    
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
  <figure className='flex justify-center items-center bg-gray-50 rounded-2xl '>
    <img
      src={image} className='h-80 '
      alt="Album" />
  </figure>
  <div className="card-body space-y-3 ">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title">By : {author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p>Review: {review}</p>
     <div className='flex items-center gap-4'>
             {tags.map((tag,ind) => <div key={ind} className="badge text-green-400 bg-green-100 font-bold">{tag}</div>)}
           </div>
    <div className=" border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
           <span> Number of pages : </span> <span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span> Publisher : </span> <span>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span> Publish time : </span> <span>{yearOfPublishing}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <div className="flex items-center gap-2">{rating} <FaRegStar /></div>
        </div>
        <div className='flex items-center gap-2'>
            <button className="btn ">Mark as Read</button>
            <button className="btn ">Add to Wishlist</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;