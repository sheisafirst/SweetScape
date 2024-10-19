import React from 'react'

export default function DetailRecipe() {
  return (
    <div className='container pt-10'>
      <div className='border-2 w-full rounded-lg shadow dark:bg-gray-400 p-5'>
        <h2 className="text-3xl font-bold text-center pb-7">Classic Tiramisu</h2>
        <div className='grid md:grid-cols-3 mx-auto'>
          <div>
            <img src="classic tiramisu.jpg" alt="Classic Tiramisu" className="p-10 aspect-[3/4]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-center">Ingredients:</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-center">Instruction:</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
