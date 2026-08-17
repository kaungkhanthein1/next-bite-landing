export const Navbar = () => {
  return (
    <header className="relative z-20 flex items-center gap-3 px-4 pt-4 sm:pt-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-transparent p-0.5 sm:h-[3.25rem] sm:w-[3.25rem] sm:p-1 md:h-[3.75rem] md:w-[3.75rem]">
        <img
          src="/assets/logo.png"
          alt="NextBite logo"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-2xl font-extrabold text-white sm:text-3xl">
        NextBite
      </span>
    </header>
  )
}
