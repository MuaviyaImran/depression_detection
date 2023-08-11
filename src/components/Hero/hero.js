export default function Hero() {
  return (
    <div className="bg-[url('/assets/hero.png')] bg-cover bg-no-repeat min-h-[600px] justify-center items-center grid">
      <h1 className="grid justify-center text-center mt-12 text-[48px] text-black ">
        Welcome To
      </h1>
      <h1 className="text-center text-[78px] font-bold text-black mx-[18.5rem]">
        AUTOMATED DEPRESSION SEVERITY LEVEL CLASSIFIER
      </h1>
      <div className="grid justify-center my-5">
        <button className="bg-black text-white p-4">Explore More</button>
      </div>
    </div>
  );
}
