"use client";
import React, { useEffect, useState, useRef } from "react";

const skills = [
  { name: "React", level: 93, flavor: "" },
  { name: "Java", level: 71, flavor: "" },
  { name: "HTML", level: 94, flavor: "" },
  { name: "CSS/SCSS/Tailwind", level: 83, flavor: "" },
  { name: "Cat Owner  ", level: 85, flavor: "" },
  { name: "JavaScript", level: 70, flavor: "" },
  { name: "Angular", level: 53, flavor: "" },
  { name: "SQL", level: 75, flavor: "" },
  { name: "Lego Builder", level: 95, flavor: "" },
  { name: "MongoDB", level: 43, flavor: "" },
  { name: "Cooking", level: 57, flavor: "" },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900"
    >
      <h2 id="skills" className="mt-20">
        Skills
      </h2>
      <p>(not to scale)</p>
      <p>
        Due to lack of CSS planning some skills were left out. These include
        (but are not limited to): Parenting, Docker, Jira, Dungeons and Dragons,
        Git and Python.
      </p>

      <div className="relative mt-5 rounded-lg py-4 px-2 text-zinc-200 bg-zinc-800">
        {skills.map((skill) => (
          <div key={skill.name} className="mt-4">
            <div className="w-full rounded-xl h-10 bg-zinc-800 ">
              <div
                className={`bg-zinc-700 text-zinc-200 h-8 ml-2 rounded-xl flex items-center justify-between transition-all duration-1000${
                  visible ? "w-full" : "w-0"
                }`}
                style={{
                  transitionDuration: "3s",
                  width: visible ? `${skill.level}%` : "0%",
                }}
              >
                <span className="ml-4 font-lg "> {skill.name} </span>
                <span className="mr-4 font-s"> {skill.flavor} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
