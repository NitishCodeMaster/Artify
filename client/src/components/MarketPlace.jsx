import React, { useState } from 'react';
import { Heart, ShoppingCart, Tag, Store, Music, Hammer, BookOpen, Palette, Guitar, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './placeholder/ImageWithFallback';

import imgMadhubani from '../assets/Images/MarketPlace/image1.jpg';
import imgWoodInst from '../assets/Images/MarketPlace/image2.png';
import imgGuitar from '../assets/Images/MarketPlace/image3.avif';
import imgDrum from '../assets/Images/MarketPlace/image4.jpeg';
import imgWoodPanel from '../assets/Images/MarketPlace/image5.png';
import imgMemoryFrame from '../assets/Images/MarketPlace/image6.png';

const marketItems = [
    {
        id: 1,
        name: 'Madhubani Painting (A3)',
        price: '$45',
        originalPrice: '$80',
        seller: 'Bihar Folk Art',
        category: 'Folk Art',
        icon: Palette,
        image: imgMadhubani,
        condition: 'New - Handmade',
        description: 'Authentic hand-painted Madhubani art on handmade paper. Unframed.',
        color: 'from-yellow-500 to-orange-500',
        tagColor: 'yellow'
    },
    {
        id: 2,
        name: 'Hand-Carved Flute Set',
        price: '$60',
        seller: 'Folk Wood Artisans',
        category: 'Musical Woodcraft',
        icon: Music,
        image: imgWoodInst,
        condition: 'New - Playable',
        description: 'Set of 3 bamboo and wood flutes carved by tribal artisans.',
        color: 'from-emerald-600 to-teal-700',
        tagColor: 'green'
    },
    {
        id: 3,
        name: 'Fender Stratocaster (2015)',
        price: '$650',
        originalPrice: '$1200',
        seller: 'Rock Music Shop',
        category: 'Instrument',
        icon: Guitar,
        image: imgGuitar,
        condition: 'Used - Good',
        description: 'Well maintained, minor scratches on the back. Perfect for gigging.',
        color: 'from-red-500 to-rose-600',
        tagColor: 'blue'
    },
    {
        id: 4,
        name: 'Vintage Drum Kit',
        price: '$350',
        originalPrice: '$800',
        seller: 'BeatMasters',
        category: 'Percussion',
        icon: Music,
        image: imgDrum,
        condition: 'Used - Fair',
        description: 'Classic sound, skins replaced recently. Great for practice.',
        color: 'from-purple-500 to-indigo-500',
        tagColor: 'blue'
    },
    {
        id: 5,
        name: 'Story Wood Art Panel',
        price: '$180',
        seller: 'Village Wood Artisans',
        category: 'Wood Sculpture',
        icon: Hammer,
        image: imgWoodPanel,
        condition: 'Unique Piece',
        description: 'Hand-carved wooden panel narrating a traditional folk story.',
        color: 'from-amber-700 to-orange-800',
        tagColor: 'orange'
    },
    {
        id: 6,
        name: 'Living Memory Frame',
        price: '$210',
        seller: 'Heritage Artists',
        category: 'Memory Art',
        icon: BookOpen,
        image: imgMemoryFrame,
        condition: 'Artist Story Included',
        description: 'A hand-carved wooden artwork sold with the artist’s personal story.',
        color: 'from-stone-600 to-neutral-700',
        tagColor: 'orange'
    }
];

export function MarketPlace() {
    const [likedItems, setLikedItems] = useState([]);

    const toggleLike = (index) => {
        setLikedItems(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section id="marketplace" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* --- BACKGROUND DECORATION (Floating Icons) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Faded Icons matching the theme */}
                <Palette className="absolute top-10 left-[5%] text-white/5 rotate-[-12deg]" size={300} strokeWidth={0.5} />
                <Music className="absolute bottom-20 right-[5%] text-white/5 rotate-[12deg]" size={400} strokeWidth={0.5} />
                <Hammer className="absolute top-[40%] right-[15%] text-white/5 rotate-[45deg]" size={200} strokeWidth={0.5} />
                <Sparkles className="absolute bottom-[10%] left-[20%] text-white/5" size={150} strokeWidth={0.5} />

                {/* Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                            <Store size={14} className="text-yellow-500" />
                            <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">Artisan & Resale Market</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair leading-tight">
                            Discover Folk Art <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 italic">
                                & Pre-Loved Gear
                            </span>
                        </h2>
                        <p className="text-white/50 mt-4 max-w-lg text-sm md:text-base">
                            Buy authentic Indian handicrafts directly from artists or find verified used instruments from the community.
                        </p>
                    </div>

                    <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start Selling
                        <Tag size={18} className="group-hover:rotate-12 transition-transform" />
                    </button>
                </div>

                {/* --- ITEMS GRID --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {marketItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative bg-[#0a0a0a] rounded-[2rem] p-3 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
                        >
                            {/* Hover Glow Gradient */}
                            <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>

                            {/* Image Container */}
                            <div className="relative h-64 rounded-[1.5rem] overflow-hidden bg-gray-900">
                                <ImageWithFallback
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                                {/* Floating Icon Badge (Top Left) */}
                                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                    <item.icon size={14} />
                                </div>

                                {/* Like Button (Top Right) */}
                                <button
                                    onClick={() => toggleLike(index)}
                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all z-20 cursor-pointer"
                                >
                                    <Heart
                                        size={14}
                                        className={`${likedItems.includes(index) ? 'fill-white text-white' : 'text-white'}`}
                                    />
                                </button>

                                {/* Condition Tag (Bottom Left) */}
                                <div className="absolute bottom-3 left-3 flex gap-2">
                                    <span className={`px-2 py-1 rounded-lg backdrop-blur-md border text-[10px] font-bold flex items-center gap-1
                                        ${item.tagColor === 'yellow' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-200' : ''}
                                        ${item.tagColor === 'blue' ? 'bg-blue-500/20 border-blue-500/30 text-blue-200' : ''}
                                        ${item.tagColor === 'green' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-200' : ''}
                                        ${item.tagColor === 'orange' ? 'bg-orange-500/20 border-orange-500/30 text-orange-200' : ''}
                                    `}>
                                        <Tag size={10} />
                                        {item.condition}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="px-3 pt-5 pb-3">
                                {/* Category Label */}
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-1">
                                        <item.icon size={10} /> {item.category}
                                    </span>
                                </div>

                                {/* Title & Price */}
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white truncate pr-2 group-hover:text-yellow-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex flex-col items-end">
                                        {item.originalPrice && (
                                            <span className="text-[10px] text-white/40 line-through">{item.originalPrice}</span>
                                        )}
                                        <span className="text-lg font-bold text-white">{item.price}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-white/50 line-clamp-2 mb-5 h-10 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Footer (Seller & Add to Cart) */}
                                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${item.tagColor === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                                        <span className="text-xs text-white/60 font-medium">
                                            By <span className="text-white hover:underline cursor-pointer">{item.seller}</span>
                                        </span>
                                    </div>

                                    <button className="p-2.5 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:bg-yellow-400">
                                        <ShoppingCart size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex justify-center">
                    <a href="#" className="text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white transition-all pb-0.5">
                        View all 450+ Listings
                    </a>
                </div>

            </div>
        </section>
    );
}