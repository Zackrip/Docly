import React from "react";

function About() {
  return (
    <div className="w-full bg-[#FFF7ED] py-12 md:py-20 rounded-t-3xl">
      <div className="p-6 sm:p-10 -mt-[2vw] font-NeueMontreal text-[#212121]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-tight">
          We turn complex documents into clear answers,{" "}
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-tight">
          making it easier to find, understand,
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-tight">
          and act on the information that matters.
        </h1>
      </div>

      <div className="border-t-2 mt-5 border-[#F9FAFB]">
        <div className="w-full text-zinc-950 text-base tracking-tight font-NeueMontreal flex flex-col md:flex-row pt-4">
          <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-14 mb-6 md:mb-0">
            <p>
              Upload your documents. Ask questions. Get answers grounded in your
              content.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex px-6 sm:px-10 md:px-0">
            <div>
              <p>
                Docly uses AI and semantic search to understand <br className="hidden sm:block" />
                your documents, retrieve the most relevant information,
                <br className="hidden sm:block" />
                and deliver accurate answers in seconds.
              </p>

              <p className="mt-8 md:mt-10">
                From PDFs and reports to notes and knowledge bases, <br className="hidden sm:block" />
                Docly helps you spend less time searching <br className="hidden sm:block" />
                and more time understanding.
              </p>

              <p className="mt-8 md:mt-10">Upload → Understand → Ask → Answer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
