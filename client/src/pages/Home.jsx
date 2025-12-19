import React from 'react'
import { ArrowRight, Play } from 'lucide-react';
import { PerformerPanel } from '../components/PerformerPanel';
import { Features } from '../components/Features';
import { Events } from '../components/Events';
import { MarketPlace } from '../components/MarketPlace';
import { ArtistSpotlight } from '../components/ArtistSpotlight';
import { MentorshipSection } from '../components/MentorshipSection';

const Home = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center overflow-hidden pt-10 bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-indigo-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

                    <div className="absolute top-1/4 -left-20 lg:left-10 opacity-20">
                        <div className="relative w-64 h-64 lg:w-96 lg:h-96 border border-dashed border-indigo-500 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute top-8 left-8 w-48 h-48 lg:w-80 lg:h-80 border border-dotted border-purple-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute top-20 left-20 w-24 h-24 lg:w-56 lg:h-56 border-2 border-transparent border-t-pink-500/50 border-r-pink-500/50 rounded-full animate-[spin_8s_linear_infinite]"></div>
                    </div>

                    <div className="absolute bottom-0 -right-10 lg:right-0 w-[400px] h-[400px] opacity-20">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[pulse_6s_ease-in-out_infinite]">
                            <path fill="#8B5CF6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,60.6,29.6C51,40.7,43.1,50.6,33.6,58.4C24.1,66.2,13,71.9,0.7,70.7C-11.6,69.5,-22.1,61.4,-33.6,54.2C-45.1,47,-57.6,40.7,-66.2,31.2C-74.8,21.7,-79.5,9,-78.4,-3.3C-77.3,-15.6,-70.4,-27.5,-61.4,-37.7C-52.4,-47.9,-41.3,-56.4,-29.7,-65.1C-18.1,-73.8,-6,-82.7,5.8,-82C17.6,-81.3,30.5,-93.6,44.7,-76.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <svg className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full opacity-10" viewBox="0 0 1000 1000">
                        <line x1="200" y1="0" x2="200" y2="1000" stroke="white" strokeDasharray="5,5" strokeWidth="1" />
                        <line x1="800" y1="0" x2="800" y2="1000" stroke="white" strokeDasharray="5,5" strokeWidth="1" />
                    </svg>
                </div>
                <div className="relative z-10 w-full mx-auto px-6 lg:px-24 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                <span className="text-white/70 tracking-wide text-sm font-medium ">Where Artists Connect & Create</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl text-white leading-[1.1] font-bold font-playfair tracking-tight">
                                Unleash Your
                                <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                                    Creative Spirit
                                </span>
                            </h1>

                            <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-[1.8] font-poppins">
                                All in one platform :— Explore gigs, join events, collaborate with artists, and unlock endless opportunities built
                                for creators to showcase, earn, and grow.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                                    Start Creating
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 font-medium">
                                    <Play size={20} className="fill-white" />
                                    Watch Demo
                                </button>
                            </div>

                            <div className="flex gap-12 pt-8 border-t border-white/10 mt-8">
                                {[
                                    { label: "Artists Joined", value: "50K+" },
                                    { label: "Live Events", value: "10K+" },
                                    { label: "Creative Cities", value: "100+" },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                                        <div className="text-indigo-200/60 text-sm mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                            <PerformerPanel />
                        </div>
                    </div>
                </div>
            </section>
            <ArtistSpotlight />
            <MentorshipSection />
            <Events />
            <MarketPlace />
            <Features />

        </>
    )
}

export default Home 