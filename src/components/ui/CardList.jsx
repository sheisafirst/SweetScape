import React from "react";

function CardList({ title, ingredients, image, jam }) {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="p-4">
          <img src={image} className="w-20 h-20 rounded-full" alt={title} />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-6 py-4">
          {ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
          ))}
        </td>
        <td className="px-6 py-4">{jam}</td>
        <td className="px-6 py-4">
          <a
            href="#"
            type="button"
            className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </a>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => alert("Are you sure you want to delete this item?")}
            className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
