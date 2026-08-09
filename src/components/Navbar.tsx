import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className="absolute top-6 left-6 z-10">
      <img src={logo} alt="Apple Things" className="h-16 md:h-20 w-auto" />
    </div>
  );
};
