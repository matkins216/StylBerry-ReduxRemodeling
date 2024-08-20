import React from "react";

const FeaturedProjSlider = () => {
  return (
    <section className="py-16 flex flex-col items-center p-4  font-rale">
      <h2 className="text-3xl font-medium mb-8 sticky">Featured Project</h2>
      <div className="flex flex-col md:flex-row overflow-scroll justify-around items-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1200px] max-h-full">
        <img
          src="https://i.imgur.com/1pkew7d.jpg"
          alt="Featured Gallery Image 4"
          className="rounded-lg shadow-lg flex-1 h-144"
        />

        <img
          src="https://i.imgur.com/1LxzWIi.jpg"
          alt="Featured Gallery Image 2"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/s5Ktb4Y.jpg"
          alt="Featured Gallery Image 3"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/1DU1noL.jpg"
          alt="Featured Gallery Image 5"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/M28wxsS.jpg"
          alt="Featured Gallery Image 1"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/jWKixh8.jpg"
          alt="Featured Gallery Image 6"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/BwwHV9r.jpg"
          alt="Featured Gallery Image 7"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/N7mV7gO.jpg"
          alt="Featured Gallery Image 8"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
        <img
          src="https://i.imgur.com/DpfY0LM.jpg"
          alt="Featured Gallery Image 9"
          className="rounded-lg shadow-lg flex-1 h-144"
        />
      </div>
    </section>
  );
};

export default FeaturedProjSlider;
