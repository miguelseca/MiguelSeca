"use client";
import { createRef } from "react";

export default function Projects() {
  const myRef = createRef<HTMLDivElement>();

  function handleRight() {
    const itemWidth = myRef.current!.getElementsByTagName("div")[0].clientWidth;
    myRef.current!.scrollLeft = myRef.current!.scrollLeft + itemWidth!;
  }

  function handleLeft() {
    const itemWidth = myRef.current!.getElementsByTagName("div")[0].clientWidth;
    myRef.current!.scrollLeft = myRef.current!.scrollLeft - itemWidth!;
  }

  return (
    <>
      <div id="projects"> </div>
      <div className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900 dark:text-zinc-200">
        <h2>Projects</h2>
        <p>These are some of my freelance projects and experiments</p>

        <div className="flex">
          {/* seta da esquerda */}
          <div
            id="esquerda"
            className="text-5xl flex justify-center items-center cursor-pointer p-4 relative -top-8"
          >
            <img
              onClick={handleLeft}
              src="/icons/left-arrow.svg"
              className="w-10 dark:invert"
            ></img>
          </div>

          {/* carrossel */}

          <div
            id="carrossel"
            ref={myRef}
            className="scroll-smooth mt-4 flex flex-1 w-full gap-6 pb-5 snap-x overflow-x-auto scrollbar-color "
          >
            <div className="min-w-[80%] md:min-w-[40%]">
              <div
                style={{ backgroundImage: "url('/images/band1.jpg')" }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-lg shadow-black/60"
              ></div>
              <h5 className="mt-4">Furniture website </h5>
              <h6>HTML / JS / CSS</h6>
            </div>

            <div className="min-w-[80%] md:min-w-[40%]">
              <div
                style={{ backgroundImage: "url('/images/band2.jpg')" }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-lg shadow-black/60"
              ></div>
              <h5 className="mt-4">Grand Hotel</h5>
              <h6>HTML / JS / CSS / SCSS</h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%]">
              <div
                style={{ backgroundImage: "url('/images/band3.jpg')" }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-lg shadow-black/60"
              ></div>
              <h5 className="mt-4">QUIK</h5>
              <h6>Angular / RxJs / NodeJS / MongoDB </h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%]">
              <div
                style={{ backgroundImage: "url('/images/band4.jpg')" }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-lg shadow-black/60"
              ></div>
              <h5 className="mt-4">QUIK administration panel</h5>
              <h6>Angular / RxJs / NodeJS / MongoDB</h6>
            </div>
          </div>

          {/* seta da direita */}
          <div
            id="direita"
            className="text-5xl flex justify-center items-center cursor-pointer p-4 relative -top-8"
          >
            <img
              onClick={handleRight}
              src="/icons/right-arrow.svg"
              className="w-10 dark:invert"
            ></img>
          </div>
        </div>

        <div id="timeline"></div>
      </div>
    </>
  );
}
