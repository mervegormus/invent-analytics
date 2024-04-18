import React from 'react';
import '../styles.css';
import {useSelector} from "react-redux";
import {selectMovieDetail} from "../store/actions/movieSlice";

const MovieCard: React.FC = () => {
    const product = useSelector(selectMovieDetail)

    return (
            <div className=" bg-white p-4 shadow-md  ">
                {product && (
                    <div className="flex items-center w-a">
                        {product.Poster &&  <div className="w-1/3">
                            <img src={product.Poster} alt="Image" className="max-w-full"/>
                        </div>
                        }
                        <div className="w-2/3 ml-4">
                            <p className="text-blue-500 mb-2">{product.Title}</p>
                            <p><span className="font-semibold">Year:</span> {product.Year}</p>
                            <p><span className="font-semibold">Genre:</span> {product.Genre}</p>
                            <p><span className="font-semibold">Released:</span> {product.Released}</p>
                            <p><span className="font-semibold">Director:</span> {product.Director}</p>
                            <p><span className="font-semibold">Writer:</span> {product.Writer}</p>
                            <p><span className="font-semibold">Actors:</span> {product.Actors}</p>
                            <p><span className="font-semibold">Runtime:</span> {product.Runtime}</p>
                            {product.Ratings && product.Ratings.length > 0 && (
                                <div>
                                    <p className="font-semibold">Ratings:</p>
                                    <ul>
                                        {product.Ratings.map((rating: { Source:string, Value:string }, index: number) => (
                                            <li key={index}>{rating.Source}: {rating.Value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

    );
};

export default MovieCard