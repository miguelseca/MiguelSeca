export default function Projects() {
  return (
    <div className="w-full mx-auto p-4 md:py-8 bg-zinc-800 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 by Miguel Seca. All Rights Reserved.
      </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          
          <li>
            <a href="#" className="hover:underline me-4 md:me-6 ">
              Github
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Say &apos;Hello there&apos; back
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}
