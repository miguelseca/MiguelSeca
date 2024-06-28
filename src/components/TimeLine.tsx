export default function TimeLine() {
  return (
    <div className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900 dark:text-zinc-200 ">
      <h2 className="mt-20">Lifeline</h2>
      <p>
        (not to scale...)
      </p>
      <div className="relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200">
        <div className="absolute top-0 left-1/2 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div className="sticky top-1/2">
            <div className="relative h-4 w-4">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div className="relative h-4 w-4 rounded-full bg-rose-500"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1980</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">(Insert Awesome childhood here)</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            
            <div className="text-zinc-400"> Lots of stupid things here</div>
          </div>
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1998</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Bachelor's Degree in physics and applied mathematics</div>
            <div className="text-zinc-400">Faculty of Sceience of Oporto' s University</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>

          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1981</h4>
          </div>





          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1982</h4>
          </div>



          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1983</h4>
          </div>



          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1984</h4>
          </div>









        </div>
      </div>
    </div>
  );
}
