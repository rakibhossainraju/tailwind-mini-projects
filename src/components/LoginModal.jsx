export const LogoModal = () => {
  return (
    <section className="relative flex flex-col md:flex-row p-6 md:p-0 my-6 gap-10 bg-white shadow-2xl rounded-2xl">
      {/*Left Side*/}
      <div className="pb-6 md:p-20">
        {/*Top Content*/}
        <h2 className="font-rokkitt mb-5 text-4xl font-bold">Log In</h2>
        <p className="max-w-sm mb-12 font-mulish font-light text-gray-600">
          Log in to your account to upload or download pictures, videos or
          music.
        </p>
        <input
          type="email"
          className="w-full px-5 py-4 border border-gray-300 rounded-md placeholder:font-mulish placeholder:font-ligh "
          placeholder="Enter you email address"
        />

        {/*Middle Content*/}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-6 md:gap-0">
          <p className="font-medium text-cyan-700">Forgot password</p>
          <button className="group w-full md:w-auto flex justify-center items-center p-6 text-white rounded-md px-9 bg-cyan-700 scale-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border duration-150">
            <span>Next</span>
            <svg
              className="w-10 h-7 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </button>
        </div>

        {/*Divider*/}
        <hr className="border-t border-slate-400 mt-10" />

        {/*Social Logins*/}
        <div className="mt-6">
          <p className="text-slate-400 text-center m-4">or log in with</p>
          {/*Button Group*/}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/*FACEBOOK BTN*/}
            <button className="w-full flex gap-3 items-center justify-center md:px-5 py-3 border-2 border-slate-300 duration-200 hover:border-slate-800 rounded-md">
              <img
                src="/assets/logo-modal/facebook.png"
                className="max-w-10 aspect-square"
                alt=""
              />
              <span className="text-lg font-medium text-slate-800">
                Facebook
              </span>
            </button>

            {/*GOOGLE BTN*/}
            <button className="w-full flex gap-3 items-center justify-center md:px-5 py-3 border-2 border-slate-300 duration-200 hover:border-slate-800 rounded-md">
              <img
                src="/assets/logo-modal/google.png"
                className="max-w-10 aspect-square"
                alt=""
              />
              <span className="text-lg font-medium text-slate-800">Google</span>
            </button>
          </div>
        </div>
      </div>

      {/*Right Side*/}
      <img
        src="/assets/logo-modal/image.jpg"
        className="w-[430px] hidden md:block"
        alt=""
      />
    </section>
  );
};
