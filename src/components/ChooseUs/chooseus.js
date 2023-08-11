export default function ChooseUs() {
  return (
    <div className="bg-blue-100 grid grid-cols-2">
      <div className="col-span-1 my-6">
        <img src="/assets/description.png" />
      </div>
      <div className="col-span-1">
        <h1 className="text-center text-[20px] font-bold text-black my-5">
          Why Choose Us?
        </h1>
        <p className="text-center px-5">
          We Bring Together A Team In T he Field Of Mental Health And Advanced
          Technology To Provide You With A Cutting-Edge Automated Depression
          Severity Level Assessment. Our Innovative Approach Ensures Reliable
          Results. <br></br>
          <br></br>Our Services Are Designed With Your Convenience And Comfort
          In Mind.Whether You Need Guidance,Or Want To Share Your
          Thoughts.Contact Us Today. Your Feedback Is Important To Us As It
          Helps Us Continually Improve Our Platform.
        </p>

        <div className="grid grid-cols-2 mx-6 gap-4 my-8">
          <div className="col-span-1 bg-slate-400 border border-black p-4 text-center">
            {" "}
            Innovation and assessment
          </div>
          <div className="col-span-1 bg-slate-400 border border-black p-4 text-center">
            {" "}
            Comprehensive insight
          </div>
        </div>
        <div className="grid grid-cols-1 mx-6 my-4">
          <div className="col-span-1 bg-slate-400 border border-black p-4 text-center">
            {" "}
            Continual improvement
          </div>
        </div>
      </div>
    </div>
  );
}
