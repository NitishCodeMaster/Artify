import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="group relative text-white/80 hover:text-white transition-colors duration-300 font-medium tracking-wide"
    >
        {children}

        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
        <span className="absolute inset-0 -z-10 scale-125 bg-indigo-500/0 group-hover:bg-indigo-500/20 blur-xl transition-all duration-300 rounded-full"></span>
    </Link>
);

const Navbar = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-white/5 ">
            <div className="w-full mx-auto px-10 lg:px-20">
                <div className="flex items-center justify-between h-20 ">

                    <Link to="/" className="group relative z-50 flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-pink-500 blur-lg opacity-30"></div>

                            <div className="relative w-full h-full bg-black border border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-indigo-500 via-purple-500 to-transparent opacity-60"></div>
                                <span className="relative z-10 font-black text-xl text-white font-sans">A</span>
                            </div>
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold font-sans tracking-wide text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 
                             bg-clip-text transition-all duration-500 ease-in-out group-hover:text-transparent group-hover:tracking-widest"
                            >
                                ARTIFY
                            </span>

                            <span className="text-[9px] text-gray-500 tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-white">
                                Studio
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/discover">Discover</NavLink>
                        <NavLink to="/events">Events</NavLink>
                        <NavLink to="/marketplace">Marketplace</NavLink>
                        <NavLink to="/community">Community</NavLink>
                        <NavLink to="/learn">Learn</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            to="/login"
                            className="
                            relative px-6 py-2.5 rounded-full text-white/80 hover:text-white border border-white/20 hover:border-indigo-400/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 ease-out"
                        >
                            Login
                        </Link>

                        <Link to="/signup" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50  transition-all duration-150 ease-linear hover:scale-[1.02] active:scale-[0.98] ">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
