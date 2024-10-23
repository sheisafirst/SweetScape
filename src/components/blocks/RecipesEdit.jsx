import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataProducts as initialDataProducts } from "./Products"; // Sesuaikan path import
import Swal from "sweetalert2";

function RecipeEdit() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [dataProducts, setDataProducts] = useState(initialDataProducts); // State untuk data produk

    useEffect(() => {
        const foundRecipe = dataProducts.find(item => item.id === parseInt(id));
        if (foundRecipe) {
            setRecipe(foundRecipe);
        } else {
            navigate("/"); 
        }
    }, [id, navigate, dataProducts]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setRecipe(prevRecipe => ({ ...prevRecipe, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const confirmResult = await Swal.fire({
            title: 'Konfirmasi',
            text: "Apakah Anda yakin ingin menyimpan perubahan ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, simpan!'
        });

        if (confirmResult.isConfirmed) {
            const updatedData = dataProducts.map(item => 
                item.id === parseInt(id) ? { ...item, title: recipe.title, ingredients: recipe.ingredients, jam: recipe.jam, image: recipe.image } : item
            );
            setDataProducts(updatedData);
            Swal.fire(
                'Sukses!',
                'Perubahan telah disimpan.',
                'success'
            );
            navigate("/list"); 
        }
    };

    if (!recipe) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Edit Resep</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Judul Resep</label>
                    <input
                        type="text"
                        value={recipe.title}
                        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Bahan-Bahan</label>
                    <textarea
                        value={recipe.ingredients.join(', ')}
                        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split(', ') })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Waktu Memasak</label>
                    <input
                        type="text"
                        value={recipe.jam}
                        onChange={(e) => setRecipe({ ...recipe, jam: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gambar Resep</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                    {recipe.image && (
                        <img src={recipe.image} alt="Preview" className="mt-2 w-40 h-40 object-cover rounded-md" />
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
}

export default RecipeEdit;
