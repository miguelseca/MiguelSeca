export default function NavButton({
  label,
  sectionID,
}: {
  label: string;
  sectionID: string;
}) {
  return (
    <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
      
        <a href="#{sectionID}}">{label}</a>
      
    </div>
  );
}
