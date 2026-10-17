import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.38"
      className="w-full"
    >
      <div className="textStructures mt-20 sm:mt-28 md:mt-40 px-5 sm:px-8 md:px-12">
        {["We Create", "WE UNDERSTAND.", "WE ANSWER."].map((item, index) => {
          return (
            <div key={item} className="masker uppercase overflow-hidden">
              <div className="w-fit flex items-center gap-2 sm:gap-0">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="shrink-0 bg-[#FF6B35] relative top-1 sm:top-1.5 h-[5vw] rounded-md sm:rounded-lg"
                  />
                )}
                <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-Founders_Grotesk tracking-tighter font-bold leading-tight md:leading-22 text-[#1F2937]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 px-5 sm:px-10 md:px-15 py-4 pb-10 sm:pb-6 md:pb-3">
        {[
          "AI document reader & knowledge assistant",
          "Turn PDFs and documents into instant answers",
        ].map((item) => {
          return (
            <p
              key={item}
              className="text-sm sm:text-[2.2vh] text-[#FF6B35] font-NeueMontreal tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}

        <Link to="/ask-docly" className="flex justify-start sm:justify-end">
          <div className="start uppercase py-2 px-4 border-[1px] text-[#FF6B35] border-[#FF6B35] text-sm sm:text-md font-NeueMontreal leading-none hover:cursor-pointer hover:bg-[#FF6B35] hover:text-white duration-300 rounded-full">
            TRY DOCLY →
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
