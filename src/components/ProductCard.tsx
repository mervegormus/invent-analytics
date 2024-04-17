import React from 'react';
import '../styles.css';

import {useNavigate} from 'react-router-dom'
import {Products} from "../utils/types";


const ProductCard: React.FC<{
    product: Products,

}> = ({product}) => {
    const navigate = useNavigate()

    return (
        <div className="w-a h-[302px] bg-white p-2  shadow-md">
            <div onClick={() => {
                navigate(`detail/${product.imdbID}`)
            }}>
                <div className="h-full">
                    <div className="text-black text-left mb-4 mt-4">
                        <p className="text-blue-500 mb-2">{product.Title}</p>
                        <p>{product.Year}</p>
                    </div>
                </div>
            </div>
            <button className="w-full h-[36px] border-none rounded-md bg-blue-500 text-white"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard