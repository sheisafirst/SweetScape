import React from 'react'
import Products from './Products'
import { useState } from 'react';

export default function SectionHome() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    
    return (
        <div className='grid md:grid-cols-2 pb-10'>
            <div className='order-2 md:order-1'>
                <Products limit={2} className='md:grid-cols-1' />
                <div className="text-center">
                    <a href="/Recipes" class="font-medium text-purple-800 dark:text-purple-500 hover:underline">Your Culinary Journey Starts Here</a>
                </div>
            </div>
            <div
                className='my-14 order-1 md:order-2 mx-auto'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#BFEAEA', // Warna oval (disesuaikan)
                    borderRadius: '50%',
                    width: '100%',
                    height: '300px',
                    // margin: '0 auto',
                    textAlign: 'center',
                    padding: '20px',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                }}

            >
                <div className='mx-auto text-center'>
            <p className={`sm:text-sm md:text-base ${isExpanded ? '' : 'line-clamp-6'}`}>
                "Discover new favorites and timeless classics with every swipe. Let each recipe inspire your next sweet adventure."
                <br />
                Uncover hidden gems and tried-and-true delights that elevate your baking game. Whether you're in the mood for
                something indulgent or light, our collection has you covered. Transform everyday moments into extraordinary treats
                with just a few taps. Embrace the joy of baking and create sweet memories that last a lifetime.
                <br />
                Every recipe is a doorway to new flavors and creative possibilities. Dive in and let your kitchen become a place of
                endless sweetness and inspiration.
            </p>
            <button
                onClick={toggleText}
                className=" text-blue-500 underline"
            >
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
            </div>
        </div>
    )
}
