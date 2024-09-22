import React from 'react'
import Recipes from './Recipes'

export default function CardHome() {
    return (
        <div className='grid grid-cols-2 gap-10 pt-10'>
            <div className='grid grid-cols-1'>
                <Recipes limit={3} />
            </div>
        </div>

    )
}
