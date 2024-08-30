import Image from "next/image";

export default function About() {
  return (
    <>
      <div id="about"> </div>

      <div className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900 dark:text-zinc-200">
        <h2 className="mt-20">About</h2>

        <p className="flex items-center justify-center mt-8 text-justify">
          My name is Miguel Seca. I&apos;m 44 years old, I have two children,
          four cats, and I'm really good at co nstructing Legos (I can supply
          pictures if needed). I have always loved programming and have been
          doing it in various forms throughout my life. My journey began in
          middle school with QBasic and Pascal, and in college, I worked with
          MATLAB and Fortran to solve differential equations and analyse the
          spectrum of stars.
        </p>

        <p className="flex items-center justify-center mt-8 text-justify">
          My professional life can be divided into two parts. Initially, I
          worked on planning cargo loading for aircraft, which kept me somewhat
          distant from programming. During this time, I dabbled in Python and
          Kotlin, explored Android development, and experimented with Unity,
          driven by a constant curiosity and eagerness to learn. In the second
          part of my career, I joined a small project that grew significantly,
          where I discovered Angular, React, and other exciting tools.
          Currently, I am working on a complex healthcare-related project as a
          full-stack developer .
        </p>

        <p className="flex items-center justify-center mt-8 mb-4 text-justify">
          For me programming will allways be a continuous journey.
        </p>

        <div className="flex items-center justify-center">
          <Image
            src="/images/while_alive.jpg"
            alt="while alive learn"
            width={300}
            height={200}
            layout="intrinsic"
          />
        </div>
      </div>
    </>
  );
}
