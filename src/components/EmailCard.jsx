export const EmailCard = () => {
  return (
    <div className="bg-zinc-800 p-2 mx-6  rounded-2xl">
      <div className="flex flex-col md:flex-row rounded-l-xl">
        <img
          src="/assets/image.jpg"
          alt="img"
          className="object-fill rounded-xl h-52 md:h-72 md:rounded-l-xl md:rouned-r-none transform duration-200 hover:scale-105 hover:rounded-xl "
        />
        <div className="p-6 md:p-12">
          <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
            Get diet and fitness tips in your inbox
          </h2>
          <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center md:text-left text-white">
            Eat better and exercise better. Sign up for the Diet & Fitness news
            latter.
          </p>
          <div className="flex flex-col gap-2 sm:gap-3 md:flex-row ">
            <input
              type="email"
              className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              placeholder="Enter you email address"
            />
            <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
