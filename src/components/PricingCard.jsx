export const PricingCard = () => {
  const priceDetails = [
    {
      amount: "100 GB",
      price: 1.99,
      status: "basic",
      lists: [
        "100 GB of storage",
        "Option to add members",
        "Extra member benefits",
      ],
    },
    {
      amount: "1 TB",
      price: 4.99,
      status: "premium",
      lists: [
        "1 TB of storage",
        "Option to add members",
        "Extra member benefits",
      ],
    },
    {
      amount: "200 GB",
      price: 2.99,
      status: "standard",
      lists: [
        "200 GB of storage",
        "Option to add members",
        "Extra member benefits",
      ],
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 my-6">
      {priceDetails.map((priceDetail) => (
        <div
          key={priceDetail.amount}
          className={`rounded-xl text-white ${priceDetail.status === "premium" ? "bg-violet-600" : "bg-slate-700"}`}
        >
          <div className="m-2">
            <div className="bg-slate-800 p-5 rounded-tl-lg rounded-tr-lg">
              <h3 className="uppercase text-center">{priceDetail.status}</h3>
              <h1 className="text-5xl font-serif text-center mt-5">
                {priceDetail.amount}
              </h1>
              <h2 className="text-center mt-2">${priceDetail.price}/Month</h2>
              <div className="flex flex-col">
                <a
                  href="#"
                  className={`inline-block px-16 py-3 mt-5 mb-8 text-center border border-violet-600 duration-200 hover:bg-violet-800 hover:text-emerald-500 hover:border-violet-800 rounded-lg ${priceDetail.status === "premium" && "bg-violet-800 "}`}
                >
                  Purchase
                </a>
              </div>
            </div>
            {/*List Container*/}
            <div className="mt-0.5 px-2 py-5 rounded-bl-lg rounded-br-lg bg-slate-800">
              {priceDetail.lists.map((text) => (
                <div key={text} className="flex justify-center">
                  <svg
                    width="24"
                    height="24"
                    className="fill-white scale-[0.8]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                  </svg>
                  <span className="ml-1">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/*Col 1*/}
    </div>
  );
};
