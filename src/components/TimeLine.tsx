export default function TimeLine() {
  return (
    <>
      <div id="timeline"></div>
      <div className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900 dark:text-zinc-200 ">
        <h2 className="mt-20">Lifeline</h2>
        <p>(not to scale...)</p>
        <div className="relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200">
          <div className="absolute top-0 left-1/2 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
            <div className="sticky top-1/2">
              <div className="relative h-4 w-4">
                <div className="absolute h-4 w-4 animate-ping rounded-full bg-orange-500 opacity-75"></div>
                <div className="relative h-4 w-4 rounded-full bg-orange-400"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1980</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">(Insert Awesome childhood here)</div>
              <div className="text-zinc-400">#bicycles #videogames </div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="text-zinc-400">
                {" "}
                Lots of stupid things here (aka <i>adolescence</i>)
                
              </div>
            </div>
            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1998</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">
                Bachelor&apos;s Degree in physics and applied mathematics
              </div>
              <div className="text-zinc-400">
                Faculty of Science of Oporto&apos;s University
              </div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="font-bold">Amateur theatre</div>
              <div className="text-zinc-400">(1999 - 2002)</div>
            </div>

            <div>
              {/* <h4 className="my-4 rounded-lg bg-zinc-900 p-2">1981</h4> */}
            </div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2006</h4>
            </div>

            <div></div>
            <div className="text-left">
              <div className="font-bold">Job: Cargo Supervisor</div>
              <div className="text-zinc-400">@Groundforce SPDH</div>
            </div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2009</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Job: Cargo Coordenator</div>
              <div className="text-zinc-400">@Portway SA, Porto</div>
            </div>

            <div></div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2012-2013</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Pedagogicval Aptitude Certificate</div>
              <div className="text-zinc-400">@IEFP</div>
            </div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2018</h4>
            </div>

            <div></div>
            <div className="text-left">
              <div className="font-bold">Job: Fullstack developer</div>
              <div className="text-zinc-400">
                @Wishes and Sketches
                <a>project felizes.pt</a>
              </div>
            </div>

            <div></div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2019</h4>
            </div>

            <div></div>
            <div className="text-left">
              <div className="font-bold">Interactive Programming in Python</div>
              <div className="text-zinc-400">@Coursera.org</div>
            </div>

            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2022</h4>
            </div>

            <div></div>
            <div className="text-right">
              <div className="font-bold">Web Development Course</div>
              <div className="text-zinc-400">
                @Polytechnic Institute of Porto
              </div>
              <div className="text-zinc-400">
                #Angular #Java #NodeJS/Express #MongoDB
              </div>
            </div>

            <div></div>
            <div></div>

            <div className="text-left">
              <div className="font-bold">
                Job: Software Developer (internship)
              </div>
              <div className="text-zinc-400">@Capgemini Enginnering</div>
              <div className="text-zinc-400">
                #React #Angular #MariaDB #Kubernetes #NodeJS #Microservices
              </div>
            </div>


            <div></div>
            <div></div>


            <div>
              <h4 className="my-4 rounded-lg bg-zinc-900 p-2">2023</h4>
            </div>
            <div></div>

            <div className="text-right">
              <div className="font-bold">
                Job: Full Stack Developer
              </div>
              <div className="text-zinc-400">@Capgemini Enginnering</div>
              <div className="text-zinc-400">
                #React #Java #SQL 
              </div>
            </div>


            {/* end of contents */}
          </div>
        </div>
      </div>
    </>
  );
}
