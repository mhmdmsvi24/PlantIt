import { ModeToggle } from "./ModeToggle";
import UserSession from "./auth/UserSession";

const Navbar = () => {
  return (
    <nav className="bg-primary dark:bg-slate-700 text-white absolute w-full top-0">
      <div className="py-2 container mx-auto px-5 flex justify-between items-center">
        <div>
          <p className="text-3xl">Planit</p>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <UserSession />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
