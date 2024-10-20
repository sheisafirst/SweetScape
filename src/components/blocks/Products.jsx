import React, { useState } from 'react'
import Card from '../ui/CardRecipe'
// import RecipesEdit from './RecipesEdit'

export const dataProducts = [
    {
        id: 1,
        image: "/classic tiramisu.jpg",
        title: "Classic tiramisu",
        ingredients: [
            "kuning telur",
            "gula bubuk",
            "mascarpone cheese",
            "cream cheese (dikocok hingga lembut)",
            "vanilla ekstrak",
            "whipping cream, kocok kaku",
            "kopi instan",
            "gula pasir",
            "air panas",
            "lady finger vicenzovo",
            "Coklat bubuk untuk taburan"
        ],
        jam: "45 min",
    },
    {
        id: 2,
        image: "/burnt cheesecake.jpg",
        title: "Burnt cheesecake",
        ingredients: [
            "cream cheese",
            "butir telur",
            "gula halus",
            "tepung maizena",
            "whipping cream",
            "Garam",
            "Vanili esen",
        ],
        jam: "45 min",
    },
    {
        id: 3,
        image: "/cheesecuit.webp",
        title: "Cheesecuit",
        ingredients: [
            "kuning telur",
            "gula bubuk",
            "mascarpone cheese (tadi pakai cream cheese dikocok hingga lembut)",
            "vanilla ekstrak",
            "whipping cream",
            "kopi instan",
            "gula pasir",
            "air panas",
            "lady finger vicenzovo",
            "Coklat bubuk"
        ],
        jam: "45 min",
    },
    {
        id: 4,
        image: "/chocolava-cake-foto-resep-utama.webp",
        title: "Choco Lava",
        ingredients: [
            "Minuman coklat bubuk",
            "Telur ayam",
            "Gula pasir",
            "Tepung terigu",
            "Mentega cair",
            "Air hangat",
        ],
        jam: "45 min",
    },
    {
        id: 5,
        image: "/mille crepes.jpg",
        title: "Mille Crepes",
        ingredients: [
            "Tepung terigu protein sedang / serbaguna",
            "Pasta strawberry",
            "Gula pasir",
            "Telur",
            "Susu UHT cair",
            "Margarin",
            "Garam",
            "Whipped cream bubuk (sy pake Haan)",
            "Air dingin",
            "Susu kental manis sesuai selera (bila suka)"
        ],
        jam: "45 min",
    },
    {
        id: 6,
        image: "/macaron.jpg",
        title: "Macaron",
        ingredients: [
            "Almond Powder (saring halus)",
            "Icing Sugar",
            "Egg White",
            "(+ Food Color)",
            "Water",
            "Fine Sugar",
            "Egg White"
        ],
        jam: "45 min",
    },
    {
        id: 7,
        image: "/panna cotta mangga.jpg",
        title: "Panna Cotta Mangga",
        ingredients: [
            "Susu cair segar",
            "Gula pasir",
            "Fibercreme",
            "Gelatin",
            "Bahan saus mangga",
            "Buah mangga matang",
            "Gula sesuai selera",
            "Gelatin yang sudah dilarutkan dengan air hangat"
        ],
        jam: "45 min",
    },
    {
        id: 8,
        image: "/soft cookies rv.jpg",
        title: "Soft Cookies Red Velvet",
        ingredients: [
            "Gula Palm",
            "Gula Pasir",
            "Butter Lelehkan (Saya pakai Margarine)",
            "Telur",
            "Terigu Serbaguna",
            "Baking Powder",
            "Soda Kue",
            "Garam",
            "Cokelat Bubuk",
            "Vanilla Bubuk",
            "Pasta Red Velvet",
            "Choco Chip"
        ],
        jam: "45 min",
    },
];

export default function Products({ limit, className }) {
    const displayedData = limit ? dataProducts.slice(0, limit) : dataProducts;

    return (
        <div className={'container grid pt-10 gap-7 pb-8 ' + className}>
            {
                displayedData.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        title={item.title}
                        ingredients={item.ingredients}
                        jam={item.jam}
                    />
                ))
            }
        </div>
    )
}