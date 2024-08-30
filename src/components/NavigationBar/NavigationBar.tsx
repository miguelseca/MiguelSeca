export default function Navbar() {
  return (
    <main className="z-10 text-zinc-200 sticky top-0 flex bg-zinc-800">
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-full items-center p-6 cursor-pointer font-bold text-orange-300 hover:text-orange-400 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#about">About</a>
        </div>
        <div className="relative flex h-full items-center p-6 cursor-pointer font-bold text-orange-300 hover:text-orange-400 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#timeline">Life</a>
        </div>
        <div className="relative flex h-full items-center p-6 cursor-pointer font-bold text-orange-300 hover:text-orange-400 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#projects">Projects</a>
        </div>

        <div className="relative flex h-full items-center p-6 cursor-pointer font-bold text-orange-300 hover:text-orange-400 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#skills">Skills</a>
        </div>
      </div>
    </main>
  );
}
