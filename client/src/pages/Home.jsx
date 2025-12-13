import React from 'react'
import { ArrowRight, Play } from 'lucide-react';
import { PerformerPanel } from '../components/PerformerPanel';

const Home = () => {
    return (
        <section className="relative h-auto flex items-center overflow-hidden pt-10 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <svg className="absolute top-32 left-20 w-40 h-40 opacity-10" viewBox="0 0 200 200">
                    <path
                        d="M 50 100 Q 75 50, 100 100 T 150 100"
                        stroke="#6366F1"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 60 120 Q 85 70, 110 120 T 160 120"
                        stroke="#8B5CF6"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>

                {/* <div className="absolute bottom-40 right-28 w-32 h-32 opacity-10">
                    <div className="w-full h-full rounded-lg rotate-45 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                </div> */}
            </div>

            <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                            <span className="text-white/70">Where Artists Connect & Create</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl text-white leading-tight">
                            Unleash Your
                            <br />
                            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Creative Spirit
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-white/70 max-w-xl leading-[2]">
                            All in one platform :— Explore gigs, join events, collaborate with artists, and unlock endless opportunities built
                            for creators to showcase, earn, and grow.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-7">
                            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2">
                                Start Creating
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Play size={20} />
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex gap-10 pt-8">
                            <div>
                                <div className="text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">50K+</div>
                                <div className="text-white/60">Artists Joined</div>
                            </div>
                            <div>
                                <div className="text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">10K+</div>
                                <div className="text-white/60">Live Events</div>
                            </div>
                            <div>
                                <div className="text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">100+</div>
                                <div className="text-white/60">Creative Cities</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-full">
                        <PerformerPanel />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home