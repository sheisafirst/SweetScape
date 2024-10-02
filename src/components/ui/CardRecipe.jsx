import React from 'react'

export default function CardRecipe({ title, ingredients, jam, image }) {
    return (
        <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                src={image}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title ? title : "kosong"}
                </h5>
                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                    {
                        ingredients && ingredients.map((item, index) => (
                            <>
                                <span>{item}</span>
                                {" - "}
                            </>
                        ))}
                </p>
                <p>
                    {jam ? jam : "kosong"}
                </p>
            </div>
        </a>

        // <div className='border p-3 bg-red-200'>
        //     {title}
        //     <img src={image} alt="" />
        //     <h1>{title ? title : "kosong"}</h1>
        //     <p>
        //         {
        //             ingredients && ingredients.map((item, index) => (
        //                 <>
        //                     <span>{item}</span>
        //                     {" - "}
        //                 </>
        //             ))
        //         }
        //     </p>
        //     <p>{jam ? jam : "kosong"}</p>

        //     {/* <div className='grid grid-cols-3 gap-3'>
        //         {
        //             jam && jam.map((item, index) => (
        //                 <button key={index} className='py-2 px-4 bg-blue-400 mb-3'>{item}</button>
        //             ))
        //         }
        //     </div> */}
        // </div >
    )
}
