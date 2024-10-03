// RecipeList.js
import React from "react";
import Products, { dataProducts } from "./Products";
function RecipeList() {

  return (
    <div className="px-24">
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-10'>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="text-xs text-gray-700 uppercase bg-pink-50 dark:bg-pink-700 dark:text-gray-400">
            <tr className="text-center text-sm">
              <th scope="col" className="px-16 py-3">
                <span class="sr-only">Image
                </span>
              </th>
              <th scope="col" className="px-6 py-3">Recipe Name</th>
              <th scope="col" className="px-6 py-3">Ingredients</th>
              <th scope="col" className="px-6 py-3">Time</th>
              <th scope="col" className="px-6 py-3">Edit</th>
              <th scope="col" className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          {dataProducts.map((item, index) => (
            <tr>
              <td className="whitespace-nowrap px-6 py-4">
                <img
                  className="object-cover w-40 rounded-full aspect-[4/4] md:rounded-full"
                  src={item.image}
                  alt="image"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <p scope="row"
                  className="px-6 py-4 text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  {item.title ? item.title : "kosong"}
                </p>
              </td>
              <td className="px-6 py-4">
                <p className="mb-3 font-thin text-gray-700 dark:text-gray-400" style={{ lineHeight: '1.5', fontSize: '12px' }}>
                  {
                    item.ingredients && item.ingredients.map((item, index) => (
                      <>
                        <span>{item}</span>
                        {" - "}
                      </>
                    ))}
                </p>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <p>
                  {item.jam ? item.jam : "kosong"}
                </p>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <a href="#" type="button" className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</a>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button
                  onClick={() => alert("Are you sure you want to delete this item?")}
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  type="button"
                >
                  Delete
                </button>
                <div
                  id="popup-modal"
                  tabIndex={-1}
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="p-4 md:p-5 text-center">
                        <svg
                          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this product?
                        </h3>
                        <button
                          data-modal-hide="popup-modal"
                          type="button"
                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                        >
                          Yes, I'm sure
                        </button>
                        <button
                          data-modal-hide="popup-modal"
                          type="button"
                          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          No, cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

          ))}

        </table>
      </div>
    </div>
  );
}

export default RecipeList;