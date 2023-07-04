import React from "react";

const CTA = () => {
  return (
    <div className="bg-[#0B0D0C] mt-20">
      <div className="lg:max-w-6xl sm:max-w-2xl max-w-md mx-auto sm:flex items-center justify-between mt-10 py-8">
        <div className="sm:text-[42px] text-[32px] text-white capitalize font-extrabold font-play">
          <h2>Let’s Make Something Together </h2>
          <h2>
            Start a<span className="text-primary ml-2">Conversation</span>
          </h2>
        </div>
        <button
          type="button"
          className="px-8 py-3 border-2 border-primary text-primary uppercase mt-10 hover:text-white hover:bg-primary"
        >
          Hire me now
        </button>
      </div>
    </div>
  );
};

export default CTA;
