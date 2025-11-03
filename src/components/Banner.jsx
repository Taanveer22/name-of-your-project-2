const Banner = () => {
  return (
    <div className="">
      <div className="relative grid h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/store.jpg')] bg-cover bg-center">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative text-center p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 text-3xl font-medium text-white">
            You are most welcome to our phone shop...
          </h2>
          <h5 className="mb-4 text-xl font-semibold text-slate-300 text-justify">
            Your next device is just a click away. The Phone Hub is your trusted
            online destination for all things mobile. Browse our extensive
            catalog of smartphones, tablets, and accessories from the comfort of
            your home. Enjoy exclusive online deals, secure and flexible payment
            options, and fast, reliable shipping. Our 24/7 customer support is
            ready to assist you anytime, anywhere.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
