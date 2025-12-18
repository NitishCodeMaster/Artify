import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export function ImageWithFallback({ src, alt, className }) {
    return <img src={src} alt={alt} className={className} />;
}
import performerImg1 from '../assets/Images/PerformerPanel/image1.jpeg';
import performerImg2 from '../assets/Images/PerformerPanel/image2.jpeg';
import performerImg3 from '../assets/Images/PerformerPanel/image3.jpeg';
import performerImg4 from '../assets/Images/PerformerPanel/image4.jpeg';
import avatarImg1 from '../assets/Images/PerformerPanel/avatar1.jpeg';
import avatarImg2 from '../assets/Images/PerformerPanel/avatar2.jpeg';
import avatarImg3 from '../assets/Images/PerformerPanel/avatar3.jpeg';
import avatarImg4 from '../assets/Images/PerformerPanel/avatar4.jpeg';

const performers = [

    {
        id: 1,
        type: "Guitarist",
        name: "Alex Rivera",
        description: "Indie rock guitarist with 5+ years of live performance experience.",
        image: performerImg1,
        avatar: avatarImg1,
        eventTitle: "Rock Concert Tonight",
        eventLocation: "The Blue Room",
        eventTime: "9:00 PM",
        rightCard: {
            label: "Live Now",
            value: "Rock Show"
        }
    },
    {
        id: 2,
        type: "Singer",
        name: "Maya Chen",
        description: "Soulful vocalist specializing in jazz and R&B performances.",
        image: performerImg2,
        avatar: avatarImg2,
        eventTitle: "Jazz Night Live",
        eventLocation: "Soul Lounge",
        eventTime: "7:30 PM",
        rightCard: {
            label: "Genre",
            value: "Jazz • R&B"
        }
    },
    {
        id: 3,
        type: "Dancer",
        name: "Jordan Blake",
        description: "Contemporary dancer and choreographer for music videos.",
        image: performerImg3,
        avatar: avatarImg3,
        eventTitle: "Dance Workshop",
        eventLocation: "Studio 5",
        eventTime: "6:00 PM",
        rightCard: {
            label: "Workshop",
            value: "Today"
        }
    },
    {
        id: 4,
        type: "Painter",
        name: "Sofia Martinez",
        description: "Visual artist creating stunning contemporary paintings and murals.",
        image: performerImg4,
        avatar: avatarImg4,
        eventTitle: "Art Exhibition",
        eventLocation: "Gallery District",
        eventTime: "5:00 PM",
        rightCard: {
            label: "Exhibition",
            value: "Open"
        }
    },

];

export function PerformerPanel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % performers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const current = performers[currentIndex];

    return (
        <div className="relative w-full h-[560px] lg:h-[620px]">
            <div className="flex justify-end">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-[95%] lg:w-full h-[640px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0">
                            <ImageWithFallback
                                src={current.image}
                                alt={current.type}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">

                            <div>
                                <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                                    {current.type}
                                </span>
                            </div>

                            <div className="space-y-4 pb-10 lg:pb-16">
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden"
                                >
                                    <ImageWithFallback
                                        src={current.avatar}
                                        alt={current.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                <div className="space-y-1">
                                    <h3 className="text-white text-2xl lg:text-3xl font-bold">
                                        {current.name}
                                    </h3>
                                    <p className="text-white/90 text-sm lg:text-base max-w-md">
                                        {current.description}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:bottom-8 lg:right-auto">
                                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white shadow-lg max-w-full">
                                    <Calendar className="w-4 h-4 text-[#6D28D9] flex-shrink-0" />
                                    <span className="text-sm">
                                        <span className="font-semibold">{current.eventTitle}</span>
                                        <span className="text-gray-500 ml-1">•</span>
                                        <span className="text-gray-600 ml-1">{current.eventLocation}</span>
                                        <span className="text-gray-500 ml-1">•</span>
                                        <span className="text-gray-600 ml-1">{current.eventTime}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-10 right-6">
                                <div className="px-4 py-3 rounded-2xl
                                              bg-white/10 backdrop-blur-md
                                              border border-white/20
                                              shadow-lg
                                              ">
                                    <p className="text-xs text-white/70">{current.rightCard.label}</p>
                                    <p className="text-lg font-semibold text-white">
                                        {current.rightCard.value}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`absolute bottom-10 right-8 w-16 h-16 rounded-full blur-2xl
                                 ${current.type === "Guitarist" && "bg-indigo-500/30"}
                                 ${current.type === "Singer" && "bg-pink-500/30"}
                                 ${current.type === "Dancer" && "bg-purple-500/30"}
                                 ${current.type === "Painter" && "bg-emerald-500/30"}
                              `}
                            ></div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-7 flex justify-center">
                <div className="flex gap-2">
                    {performers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-[#6D28D9] w-6"
                                : "bg-white/40 w-2 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}