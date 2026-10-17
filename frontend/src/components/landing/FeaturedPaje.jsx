import React from "react";

function FeaturedPaje() {
  return (
    <div className="w-full py-12 md:py-25">
      <div className="w-full text-[#212121] px-5 sm:px-10 md:px-15 border-b-2 border-[#C1C1C1] pb-8 md:pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter font-NeueMontreal">
          Featured projects
        </h1>
      </div>

      {/* Row 1 */}
      <div className="cards w-full flex flex-col md:flex-row gap-5 mt-10 md:mt-20 px-5 sm:px-10 md:px-15">
        <div className="cardscontainer relative w-full md:w-1/2 h-[60vw] sm:h-[45vw] md:h-[75vh]">
          <h1 className="hidden md:block absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap">
            {"Salience Labs".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              alt="Salience Labs"
            />
          </div>
          <div className="flex mt-4 gap-3 flex-wrap font-NeueMontreal tracking-tighter">
            <button className="uppercase border-[1px] px-3 py-0.5 hover:cursor-pointer rounded-2xl hover:bg-[#212121] hover:text-white text-sm text-black">
              Brand identity
            </button>
            <button className="uppercase text-black border-[1px] hover:cursor-pointer py-0.5 hover:bg-[#212121] hover:text-white px-3 rounded-2xl text-sm">
              Pitch Deck
            </button>
          </div>
        </div>

        <div className="cardscontainer relative w-full md:w-1/2 h-[60vw] sm:h-[45vw] md:h-[75vh]">
          <h1 className="hidden md:block absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap">
            {"meddalia experience".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
              alt="Meddalia Experience"
            />
          </div>
          <div className="flex mt-4 gap-3 flex-wrap font-NeueMontreal tracking-tighter">
            <button className="uppercase border-[1px] px-3 py-0.5 hover:cursor-pointer rounded-2xl hover:bg-[#212121] hover:text-white text-sm text-black">
              conference
            </button>
            <button className="uppercase text-black border-[1px] hover:cursor-pointer py-0.5 hover:bg-[#212121] hover:text-white px-3 rounded-2xl text-sm">
              executive keynote
            </button>
            <button className="uppercase text-black border-[1px] hover:cursor-pointer py-0.5 hover:bg-[#212121] hover:text-white px-3 rounded-2xl text-sm">
              product launch
            </button>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="cards w-full flex flex-col md:flex-row gap-5 mt-10 md:mt-20 px-5 sm:px-10 md:px-15">
        <div className="cardscontainer relative w-full md:w-1/2 h-[60vw] sm:h-[45vw] md:h-[75vh]">
          <h1 className="hidden md:block absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap">
            {"AH2 & Math Horn".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="AH2 & Math Horn"
            />
          </div>
          <div className="flex mt-4 gap-3 flex-wrap font-NeueMontreal tracking-tighter">
            <button className="uppercase text-black border-[1px] py-0.5 hover:cursor-pointer hover:bg-[#212121] hover:text-white px-3 rounded-2xl text-sm">
              pitch deck
            </button>
          </div>
        </div>

        <div className="cardscontainer relative w-full md:w-1/2 h-[60vw] sm:h-[45vw] md:h-[75vh]">
          <h1 className="hidden md:block absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap">
            {"Vise".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
              alt="Vise"
            />
          </div>
          <div className="flex mt-4 gap-3 flex-wrap font-NeueMontreal tracking-tighter">
            <button className="uppercase border-[1px] px-3 rounded-2xl hover:bg-[#212121] hover:cursor-pointer hover:text-white py-0.5 text-sm text-black">
              agency
            </button>
            <button className="uppercase text-black border-[1px] py-0.5 hover:bg-[#212121] hover:cursor-pointer hover:text-white px-3 rounded-2xl text-sm">
              company presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPaje;
