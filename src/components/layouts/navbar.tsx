import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-white border-border border-b">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap font-sixtyfour">
            Hello UUID!🥑
          </span>
        </div>
        <a
          href="https://github.com/whopper1962/uuid-generator"
          className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hover:scale-110 transition-all"
        >
          <Image
            src="/fa-github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="text-xl sm:text-2xl"
          />
        </a>
      </div>
    </nav>
  );
}
