import Projects from "@/components/Projects";
import Navbar from "@/components/NavigationBar/NavigationBar";
import About from "@/components/About";
import TimeLine from "@/components/TimeLine";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900">
      <Navbar />

      <div
        //style={{ backgroundImage: "url('/images/hero.jpg')" }}
        className="flex flex-col bg-cover bg-center bg-fixed items-center justify-center h-[calc(100vh-200px)] min-h-[400px] 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900"
      >
        {/* <div className="bg-white/30 py-2 px-4 rounded-full text-center backdrop-blur-md"> */}
        <div className=" rounded-full">
          <img src="/images/me.jpg" className=" rounded-full" width={250}></img>
        </div>
        <div className="text-3xl font-bold text-zinc-100 mt-5">
          Hello there. I'm Miguel Seca
        </div>
      </div>

      <About />
      <TimeLine />
      <Projects />
      <Skills />

      <Footer />
    </div>
  );
}
