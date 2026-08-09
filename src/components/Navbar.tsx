import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
      <img src={logo} alt="Apple Things" className="h-12 sm:h-14 md:h-20 w-auto" />
    </div>
  );
};
