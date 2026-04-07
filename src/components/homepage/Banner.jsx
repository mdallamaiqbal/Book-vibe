import React from 'react';
import BookIMG from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
    <img
      src={BookIMG}
      className="max-w-sm rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold py-4">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-success text-white mt-2">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;