import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Swal from "sweetalert2";
import Products, { dataProducts as initialDataProducts } from "./Products";

function RecipeList() {
  const [dataProducts, setDataProducts] = useState(initialDataProducts);

  const handleDelete = (itemTitle) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: `Anda akan menghapus resep: ${itemTitle}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
      if (result.isConfirmed) {
        setDataProducts(prevData => prevData.filter(item => item.title !== itemTitle));
        Swal.fire('Terhapus!', 'Resep telah dihapus.', 'success');
      }
    });
  };

  return (
    <div className="md:px-24">
       <Link to={"/dashboard/add"}>
      <button className="text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 mt-10 text-center">
        Add Recipes 
      </button>
      </Link>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
     
        <table className="min-w-full text-left text-sm font-light">
          <thead className="text-xs text-gray-700 uppercase bg-pink-100 dark:bg-pink-700 dark:text-gray-400">
            <tr className="text-center text-sm">
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-3 py-3">Recipe Name</th>
              <th scope="col" className="px-3 py-3">Ingredients</th>
              <th scope="col" className="px-3 py-3">Time</th>
              <th scope="col" className="px-3 py-3">Edit</th>
              <th scope="col" className="px-3 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataProducts.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-3 py-4">
                  <img className="object-cover w-20 h-20 rounded-full" src={item.image} alt="image" />
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <p className="text-base font-bold text-gray-900">{item.title}</p>
                </td>
                <td className="px-3 py-4">
                  <p className="mb-3 font-thin text-gray-700 line-clamp-5" style={{ lineHeight: '1.5', fontSize: '12px' }}>
                    {item.ingredients.join(" - ")}
                  </p>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <p>{item.jam}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Link 
                    to={`/edit/${item.id}`} 
                    className="block text-white bg-green-700 hover:bg-green-800 rounded-lg text-sm px-4 py-1.5 text-center"
                  >
                    Edit
                  </Link>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <button
                    onClick={() => handleDelete(item.title)}
                    className="block text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-4 py-1.5 text-center"
                    type="button"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeList;
