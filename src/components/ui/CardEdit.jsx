import React from 'react';

export default function CardEdit({ image, title, ingredients, jam, onEdit }) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600 mt-2">{`Cooking Time: ${jam}`}</p>
                <div className="mt-2">
                    <h3 className="text-lg font-semibold">Ingredients:</h3>
                    <ul className="list-disc list-inside">
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={onEdit}
                    className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Edit Recipe
                </button>
            </div>
        </div>
    );
}
