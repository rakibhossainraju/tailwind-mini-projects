export const ImageGallery = () => {
  return (
    <section className="bg-white p-6 md:px-14 md:py-10 m-3 gap-10 shadow-2xl rounded-3xl">
      {/*Menu Container*/}
      <div className="flex flex-col  md:flex-row items-center justify-center md:justify-end gap-3 md:gap-8 mb-10">
        {/*Menu Items*/}
        {navLinks.map((navLink) => (
          <div key={navLink} className="group">
            <a href="#">{navLink}</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {/*Search Container*/}
      <div className="flex flex-col md:justify-between md:flex-row gap-5 md:gap-7">
        {/*Input and SVG Container*/}
        <div className="flex justify-between shadow-xl rounded-lg px-5">
          <input
            type="text"
            placeholder="search"
            className="ml-5 border-none md:w-80 placeholder:font-thin placeholder:text-slate-500 focus:outline-none"
          />
          <svg
            className="fill-slate-500 w-5 aspect-square hover:scale-105 transition  duration-200"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.4 490.4"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path>
              </g>
            </g>
          </svg>
        </div>

        {/*Upload Button*/}
        <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md duration-200 hover:bg-white hover:text-black shadow-2xl ">
          Upload
        </button>
      </div>

      {/*Gallery Container*/}
      <div className="grid gap-4 md:gap-7 md:grid-cols-2 lg:grid-cols-3 my-10 ">
        {/*Image 1*/}
        {imageUrls.map((url, index) => (
          <div key={index} className="relative group rounded overflow-hidden">
            <img src={url} className="max-w-72 h-64" alt="" />
            <div className="bg-black bg-opacity-50 backdrop-blur-xl absolute -bottom-12 group-hover:bottom-0 duration-300 w-full px-4 py-2 flex justify-between items-center opacity-0 group-hover:opacity-100">
              <div className="text-white">
                <p>Abstract Painting</p>
                <p>245 likes - 35 Shares</p>
              </div>
              <img src="/assets/image-gallery/bookmark.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const navLinks = ["Vector", "Illustrations", "Images", "Icons"];
const imageUrls = [
  "/assets/image-gallery/image1.jpg",
  "/assets/image-gallery/image2.jpg",
  "/assets/image-gallery/image3.jpg",
  "/assets/image-gallery/image4.jpg",
  "/assets/image-gallery/image5.jpg",
  "/assets/image-gallery/image6.jpg",
];
