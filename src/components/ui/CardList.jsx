import React from 'react'

export default function CardList() {
  return (
    <div className='px-20'>
      <div className='h-60'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-10'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-pink-400'>
            <thead className='text-xs text-gray-700 uppercase bg-pink-50 dark:bg-pink-700 dark:text-pink-400'>
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Recipe name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

    </div>
  )
}
