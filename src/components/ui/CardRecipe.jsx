import React from 'react';
import { Link } from 'react-router-dom';

export default function CardRecipe({ id, title, ingredients, jam, image }) {
    return (
        <Link
            to={`/recipes/${id}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="object-cover w-40 rounded-t-lg aspect-[3/4] md:rounded-none md:rounded-s-lg"
                src={image}
                alt={title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title || "kosong"}
                </h5>
                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.2', fontSize: '14px' }}>
                    {ingredients && ingredients.map((item, index) => (
                        <span key={index}>
                            {item}{index < ingredients.length - 1 ? " - " : ""}
                        </span>
                    ))}
                </p>
                <p>
                    {jam || "kosong"}
                </p>
            </div>
        </Link>
    );
}
