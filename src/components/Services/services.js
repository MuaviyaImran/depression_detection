export default function Services() {
  return (
    <section className="bg-blue-100   py-5 px-5">
      <h1 className="text-center text-[30px] font-extrabold">OUR SERVICES</h1>
      <div className="grid grid-cols-4 gap-5 mx-8 my-8">
        <div className="col-span-1 bg-green-500 border border-black hover:bg-green-950">
          <div className="grid grid-rows-1">
            <div className="row-span-1 p-4 grid justify-center">
              <div className="grid justify-center">
                <img src="/assets/img4.png" className="w-fit h-fit" />
              </div>

              <h1 className="text-center text-[20px] font-bold text-white my-2">
                User-Friendly Experience
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-green-500 border border-black hover:bg-green-950">
          <div className="grid grid-rows-1">
            <div className="row-span-1 p-4 grid justify-center">
              <div className="grid justify-center">
                <img src="/assets/img5.png" className="w-[160px] h-[160px]" />
              </div>

              <h1 className="text-center text-[20px] font-bold text-white my-2">
                Reliable Results
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-green-500 border border-black hover:bg-green-950">
          <div className="grid grid-rows-1">
            <div className="row-span-1 p-4 grid justify-center">
              <div className="grid justify-center">
                <img src="/assets/img3.png" className="w-[160px] h-[160px]" />
              </div>

              <h1 className="text-center text-[20px] font-bold text-white my-2">
                Complementing Professional Advice
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-green-500 border border-black hover:bg-green-950">
          <div className="grid grid-rows-1">
            <div className="row-span-1 p-4 grid justify-center">
              <div className="grid justify-center">
                <img src="/assets/img2.png" className="w-[160px] h-[160px]" />
              </div>

              <h1 className="text-center text-[20px] font-bold text-white my-2">
                Self Reflection and empowerment
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
