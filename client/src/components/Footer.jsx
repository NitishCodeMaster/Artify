import { Link } from "react-router-dom";
import {
    Instagram,
    Twitter,
    Facebook,
    Youtube,
    Mail,
    MapPin,
    Globe,
    ArrowRight,
} from "lucide-react";

export function Footer() {
    const socialLinks = [
        {
            icon: Instagram,
            href: "#",
            colorClass:
                "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent",
        },
        {
            icon: Twitter,
            href: "#",
            colorClass: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
        },
        {
            icon: Youtube,
            href: "#",
            colorClass: "hover:bg-[#FF0000] hover:border-[#FF0000]",
        },
        {
            icon: Facebook,
            href: "#",
            colorClass: "hover:bg-[#4267B2] hover:border-[#4267B2]",
        },
    ];

    return (
        <footer className="relative bg-black text-white overflow-hidden border-t border-white/5 pt-20 pb-10">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* MAIN GRID */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 mb-12">
                    {/* BRAND */}
                    <div className="lg:col-span-4 space-y-6">
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
                        <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                            A creator-first ecosystem to showcase talent, learn from mentors,
                            trade instruments, and grow with a global artist community.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.colorClass}`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* FOR CREATORS */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm uppercase font-bold mb-6 tracking-wide">
                            For Creators
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="#" className="hover:text-indigo-400">Find a Mentor</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Sell Instruments</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Host an Event</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Creator Community</a></li>
                        </ul>
                    </div>

                    {/* EXPLORE */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm uppercase font-bold mb-6 tracking-wide">
                            Explore
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="#" className="hover:text-white">Artist Spotlight</a></li>
                            <li><a href="#" className="hover:text-white">Live Events</a></li>
                            <li><a href="#" className="hover:text-white">Marketplace</a></li>
                            <li><a href="#" className="hover:text-white">Mentorship</a></li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm uppercase font-bold mb-6 tracking-wide">
                            Support
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm uppercase font-bold mb-6 tracking-wide">
                            Get in Touch
                        </h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex gap-3">
                                <Mail size={16} className="text-indigo-400 mt-0.5" />
                                support@artify.studio
                            </li>
                            <li className="flex gap-3">
                                <MapPin size={16} className="text-indigo-400 mt-0.5" />
                                Mumbai, India
                            </li>
                            <li className="flex gap-3">
                                <Globe size={16} className="text-indigo-400 mt-0.5" />
                                www.artify.studio
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 py-8 mb-2">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h5 className="font-bold mb-1">Stay in the loop</h5>
                            <p className="text-xs text-white/50">
                                Get the latest gigs, mentors, updates and artist news.
                            </p>
                        </div>

                        <div className="relative w-full md:w-[320px]">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 pr-12"
                            />
                            <button className="absolute right-1.5 top-1.5 p-2 rounded-full bg-indigo-600 hover:bg-indigo-500">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 text-xs text-white/40 mb-7">
                    <span>✔ Verified Mentors</span>
                    <span>✔ Secure Marketplace</span>
                    <span>✔ Built for Artists</span>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <p>© 2025 Artify • Built for creators, by creators</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
