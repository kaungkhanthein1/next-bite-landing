export const Navbar = () => {
  return (
    <header className="relative z-20 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="flex items-center justify-center rounded-2xl bg-[#101726]/90 px-4 py-3 shadow-[0_8px_30px_rgba(249,115,22,0.18)] ring-1 ring-white/5 backdrop-blur-sm sm:px-5 sm:py-4">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
      />
      </div>
    </header>
  )
}
