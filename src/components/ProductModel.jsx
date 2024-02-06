export const ProductModel = () => {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-12  px-5 py-9 bg-white rounded-2xl shadow-2xl md:flex-row ">
      <div>
        <img
          src="/assets/product-model/headphone.png"
          alt="Headphone png"
          className="mx-auto w-60 hover:scale-105 ease-linear duration-300"
        />
      </div>

      {/*Content*/}
      <div className="flex flex-col gap-6">
        {/*Label & Description Container*/}
        <div className="flex flex-col mb-4 gap-3 text-center md:text-left">
          <div>
            <span className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
              Free Shipping
            </span>
          </div>

          {/*Title*/}
          <h3 className="max-w-sm text-2xl font-medium">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </h3>

          {/*Price Container*/}
          <div className="flex flex-col mb-4 gap-3 text-center md:text-left">
            <p className="line-through">$799</p>
            <p className="text-5xl fblo ">$599</p>
            <p className="text-sm font-light text-gray-400">
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>

          {/*Button*/}
          <button className="w-full bg-rose-600 text-white p-4 rounded-lg shadow-[0_0.5rem_1rem_0_rgba(236,60,100,0.5)]  duration-300 hover:bg-rose-800">
            Add to card
          </button>

          {/*Stock*/}
          <div className="flex items-center mt-2 gap-3 group">
            <span className="w-3 aspect-square rounded-full bg-green-400 group-hover:animate-ping" />
            <p className="text-sm">50+ pcs. in stock</p>
          </div>
          {/*Buttons Container*/}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex justify-center items-center py-3 px-5 gap-3 border-2 border-gray-400 rounded-md shadow-sm transition-all duration-150 hover:shadow-xl hover:scale-[1.01]">
              <img
                className="w-8"
                src="/assets/product-model/weight.png"
                alt="weight png"
                aria-hidden
              />
              <span>Add to card</span>
            </button>
            <button className="flex justify-center items-center py-3 px-5 gap-3 border-2 border-gray-400 rounded-md shadow-sm transition-all duration-150 hover:shadow-xl hover:scale-[1.01]">
              <img
                className="w-8"
                src="/assets/product-model/heart.png"
                alt="weight png"
                aria-hidden
              />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
("rgba(236,60,100,0.89)");
