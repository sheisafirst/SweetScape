import React from 'react'

export default function CardHome() {
    return (
        <section className='relative'>
            <img src="/gambar1.jpg" alt="baking" className='absolute w-full h-full object-cover -z-10' style={{ opacity: 0.5 }} />
            <div className='container mx-auto py-20'>
                <h1 className='text-black text-center font-bold text-3xl'>Where Every Dessert <br />
                    Tells a Story of Sweetness</h1>
                <p className='text-black font-normal text-lg text-center pt-5'>From simple ingredients to delightful creations, every recipe is an expression of joy. Embrace the art of baking, and find inspiration in every step of the process. Let your kitchen be a canvas, where flavors and memories come to life. Turn ordinary days into sweet celebrations, one recipe at a time.</p>
            </div>
        </section>
    )
}
