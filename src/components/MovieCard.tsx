import React from 'react';
import '../styles.css';

import {useNavigate} from 'react-router-dom'
import {Products} from "../utils/types";
import {useSelector} from "react-redux";
import {selectMovieDetail} from "../store/actions/movieSlice";


const MovieCard: React.FC = () => {
    const product = useSelector(selectMovieDetail)
//todo:Ratings
    return (
        <div className="w-a  bg-white p-2  shadow-md">
            {product && <div className="h-full">
                <img src={product?.Poster} alt="Image" className="max-w-full  "/>
                <div className="text-black text-left mb-4 mt-4">
                    <p className="text-blue-500 mb-2">{product.Title}</p>
                    <p>{product.Year}</p>
                    <p>{product.Genre}</p>
                    <p>{product.Released}</p>
                    <p>{product.Director}</p>
                    <p>{product.Writer}</p>
                    <p>{product.Actors}</p>
                    <p>{product.Runtime}</p>
                </div>
            </div>}
        </div>
    );
};

export default MovieCard