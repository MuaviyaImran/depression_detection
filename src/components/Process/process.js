export default function Process() {
  return (
    <section className="bg-[#eee]   py-5 px-5">
      <h1 className="text-center text-[30px] font-extrabold">PROCESS</h1>
      <div className="grid grid-cols-3 gap-5 mx-8 my-8">
        <div className="col-span-1 border border-black">
          <div className="grid-rows-1  ">
            <div className="row-span-1">
              <img src="/assets/speak.png" className="w-full h-[300px]" />
            </div>
            <div className="row-span-1 p-5">
              <h1 className="text-center text-[24px] font-bold">Speak</h1>
              <p className="text-center">
                Take A Deep Breath And Start Speaking Naturally(Free Speech) ,
                Avoid Overthinking Or Rehearsing Your Speech. The Goal Is To
                Provide An Authentic Representation Of Your Current State.
              </p>
            </div>
            <div className="row-span-1"></div>
          </div>
        </div>
        <div className="col-span-1 border border-black">
          <div className="grid-rows-1">
            <div className="row-span-1 ">
              <img src="/assets/analyze.png" className="w-full h-[300px]" />
            </div>
            <div className="row-span-1 p-5">
              <h1 className="text-center text-[24px] font-bold">Analyze</h1>
              <p className="text-center">
                Automated Depression Severity Level Classifier Employs Advanced
                Algorithms To Meticulously Analyze The Speech Patterns.By
                Examining Various Aspects Of Your Speech I.E. Emotional
                Indicators
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-black">
          <div className="grid-rows-1">
            <div className="row-span-1">
              <img src="/assets/results.png" className="w-full h-[300px]" />
            </div>
            <div className="row-span-1 p-5">
              <h1 className="text-center text-[24px] font-bold">Results</h1>
              <p className="text-center">
                Then Automated Depression Severity Level Classifier Will
                Categorize Depression Into A Specific Level, Such As Mild,
                Moderate, Or Severe. And Then Display The Results In The Form Of
                Report
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
