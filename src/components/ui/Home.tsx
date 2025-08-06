export default function Home() {
  return (
    <div className="Home">
        <div className="flex h-screen w-full bg-[url(/images/landing_page.jpg)] bg-cover bg-center relative">
                <div className="flex flex-col items-left text-white px-4">
    <h1 className="text-3xl font-bold text-left">
      Welcome to Triad Global Trading
    </h1>
    <p className="text-lg text-left mt-3">
      Your one-stop solution for all your trading needs.
    </p>
    <button className="hidden md:block mt-3 w-32 bg-primary border border-white hover:text-secondary px-2 py-2 rounded-full">KNOW MORE</button>
  </div>
        </div>
         
      {/* <div className=" container flex mx-auto px-7 py-9 bg-[url(/images/landing_page.jpg)] h-screen bg-local bg-cover bg-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Triad Global Trading
        </h1>
        <p className="text-lg text-center mt-4">
          Your one-stop solution for all your trading needs.
        </p>
        <div className="container "></div>
      </div> */}
   
    </div>
    
  );
}
