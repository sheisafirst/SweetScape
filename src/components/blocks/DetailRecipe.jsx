import React from 'react';
import { useParams } from 'react-router-dom';
import { dataProducts } from './Products'; // Adjust the import based on your structure

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = dataProducts.find(item => item.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail mt-5">
      <h1 className='text-center text-3xl font-bold'>{recipe.title}</h1>
      <div className='container mx-auto pt-10 grid md:grid-cols-3 gap-10'>
        <img src={recipe.image} alt={recipe.title} className='w-full object-cover lg:aspect-[3/4] h-50 rounded-xl' />
        <div className='border shadow border-black-300 p-5 rounded-xl max-h-[27rem] overflow-y-auto'>
          <h2 className='text-center text-xl font-bold'>Ingredients</h2>
          <ul>
            {recipe.ComplateIngredients.map((ComplateIngredients, index) => (
              <li key={index}>{ComplateIngredients}</li>
            ))}
          </ul>
          <p className=' font-bold pt-5'>Preparation Time: {recipe.jam}</p>
        </div>
        <div className='border shadow border-black-500 p-5 rounded-xl max-h-[27rem] overflow-y-auto'>
          <h2 className='text-center text-xl font-bold'>Instructions</h2>
          <ol>
            {recipe.Instruction.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
