import React from 'react'
import Card from './CardRecipe'

export default function Recipes() {

    const data = [
        {
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
            image: "/burnt cheesecake.jpg",
            title: "Burnt cheesecake",
            ingredients: ["cream cheese ",
                "butir telur ",
                "gula halus ",
                "tepung maizena ",
                "whipping cream ",
                "Garam ",
                "Vanili esen",
            ],
            jam: "45 min",
        },
        {
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
            image: "/chocolava-cake-foto-resep-utama.webp",
            title: "Choco Lava",
            ingredients: ["Minuman coklat bubuk",
                "Telur ayam",
                "Gula pasir",
                "Tepung terigu",
                "Mentega cair",
                "Air hangat",
            ],
            jam: "45 min",
        },
        {
            image: "/mille crepes.jpg",
            title: "Mille Crepes",
            ingredients: ["Tepung terigu protein sedang / serbaguna",
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
            image: "/macaron.jpg",
            title: "Macaron",
            ingredients: ["Almond Powder (saring halus)",
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
            image: "/panna cotta mangga.jpg",
            title: "Panna Cotta Mangga",
            ingredients: ["Susu cair segar",
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
            image: "/soft cookies rv.jpg",
            title: "Soft Cookies Red Velvet",
            ingredients: ["Gula Palm",
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
    ]

    return (
        <div className='container grid grid-cols-2 gap-10 pt-10'>
            {
                data.map((item, index) => (
                    <Card key={index} image={item.image} title={item.title} ingredients={item.ingredients} jam={item.jam} />
                ))
            }
        </div>
    )
}
