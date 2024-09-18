import React from 'react'

export default function CardHomeResep() {
    return (
        <div className='container'>
            <div className='grid md:grid-cols-2 gap-10 '>
                <div
                    className='mt-10 order-2 md:order-1 overflow-y-auto'
                    style={{
                        maxHeight: '80vh', // Sesuaikan tinggi maksimal
                        overflowY: 'auto', // Mengaktifkan scroll secara vertikal
                    }}
                >

                    <div>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/classic tiramisu.jpg"
                                alt="clasic tiramisu"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Classic Tiramisu
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    kuning telur - gula bubuk - mascarpone cheese - vanilla ekstrak - whipping cream, kocok kaku - kopi instan - gula pasir - air panas - lady finger vicenzovo - Coklat bubuk untuk taburan
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/burnt cheesecake.jpg"
                                alt="cheesecake"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Burnt Cheesecake
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    cream cheese - butir telur - gula halus - tepung maizena - whipping cream - Garam - Vanili esen
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/cheesecuit.webp"
                                alt="cheesecuit"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Cheesecuit
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    whipping cream bubuk - air es - keju spread - susu kental manis - crackers - susu UHT/ air kopi - topping coklat bubuk
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/chocolava-cake-foto-resep-utama.webp"
                                alt="chocolava"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Choco Lava
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    Minuman coklat bubuk - Telur ayam - gula pasir - Tepung terigu -mentega cair - Air hangat
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/mille crepes.jpg"
                                alt="mille crepes"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Mille Crepes Strawberry
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    tepung terigu protein sedang / serbaguna - pasta strawberry - gula pasir - telur - susu UHT cair - margarin - garam - whipped cream bubuk - air dingin - susu kental manis sesuai selera (bila suka)
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/macaron.jpg"
                                alt="macaron"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Macaron
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    Almond Powder (saring halus) - Icing Sugar - Egg White - (+ Food Color) - Water - Fine Sugar - Egg White
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/panna cotta mangga.jpg"
                                alt="panna cotta mangga"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Panna Cotta Mangga
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    susu cair segar - gula pasir - fibercreme - gelatin - Bahan saus mangga - buah mangga matang - gula sesuai selera - gelatin yang sudah di larutkan dengan air hangat
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='pt-10'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                                src="/soft cookies rv.jpg"
                                alt="soft cookies rv"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Soft Cookies Red Velvet
                                </h5>
                                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                                    Gula Palm - Gula Pasir - Butter Lelehkan (Saya Margarine) - Telur -Terigu Serbaguna - Baking Powder - Soda Kue - Garam -Cokelat Bubuk - Vanilla Bubuk - Pasta Red Velvet - Choco Chip
                                </p>
                                <div className='flex items-center gap-3'>
                                    <img src="/Clock.svg" alt="clock" className='w-5 h-5' />
                                    <p className='font-medium'>1 jam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div
                    className='mt-10 order-1 md:order-2 mx-auto'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#BFEAEA', // Warna oval (disesuaikan)
                        borderRadius: '50%',
                        width: '120%',
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
                    <p>
                        "Discover new favorites and timeless classics with every swipe. Let each recipe inspire your next sweet adventure."
                        <br />
                        Uncover hidden gems and tried-and-true delights that elevate your baking game. Whether you're in the mood for
                        something indulgent or light, our collection has you covered. Transform everyday moments into extraordinary treats
                        with just a few taps. Embrace the joy of baking and create sweet memories that last a lifetime.
                        <br />
                        Every recipe is a doorway to new flavors and creative possibilities. Dive in and let your kitchen become a place of
                        endless sweetness and inspiration.
                    </p>
                </div>
            </div>
        </div>
    )
}