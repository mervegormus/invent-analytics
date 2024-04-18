import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, selectMovies} from "../store/actions/movieSlice";
import {Products} from "../utils/types";
import {AppDispatch} from "../store";
import {useNavigate} from "react-router-dom";

const MoviesList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const {Search, totalResults} = useSelector(selectMovies)
    const [filteredData, setFilteredData] = useState<Products[]>(Search)
    const [search, setSearch] = useState('')
    const [year, setYear] = useState('')
    const [currentPage, setCurrentPage] = useState<number>()
    const totalPages = +totalResults / 10
    const mappingData = filteredData?.length > 0 ? filteredData : (Search || [])


    /*● Necessary commands to run the application should preferably be communicated in the
    README.md file.
    */

    useEffect(() => {
        if (Search && Search.some((item: Products) => item.Title.toLowerCase().includes(search.toLowerCase()))) {
            const filtered = Search.filter((v: Products) => v.Title.toLowerCase().includes(search.toLowerCase()))
            filtered && setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
    }, [search])

    return (
        <div className="flex flex-wrap gap-6 align-middle">
            <div className="flex items-center border rounded p-2">
                <span className="mr-2">🔍</span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow border-none focus:outline-none"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    value={search}
                    data-id={'search-input'}
                />
            </div>
            <div className="flex items-center border rounded p-2">
                <span className="mr-2">📅</span>
                <input
                    type="text"
                    placeholder="Year..."
                    className="flex-grow border-none focus:outline-none"
                    onChange={(e) => {
                        setYear(e.target.value)
                        dispatch(getMovies({y: e.target.value, type: 'movie'}))
                    }}
                    value={year}
                    data-id={'search-input'}
                />
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => dispatch(getMovies({type: 'movie'}))}
                >
                    Movies
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => dispatch(getMovies({type: 'series'}))}
                >
                    Series
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => dispatch(getMovies({type: 'episode'}))}
                >
                    Episodes
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-400 text-left">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Released</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">IMDB ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mappingData.map((product: Products) => (
                        <tr className="cursor-pointer" key={product.imdbID} onClick={() => {
                            dispatch(getProductDetail(product.imdbID))
                            navigate(`detail/${product.imdbID}`)
                        }
                        }>
                            <td className="border px-4 py-2">{product.Title}</td>
                            <td className="border px-4 py-2">{product.Year}</td>
                            <td className="border px-4 py-2">{product.Type}</td>
                            <td className="border px-4 py-2">{product.imdbID}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-center mt-4 space-x-2">
                    {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
                            onClick={() => {
                                setCurrentPage(page)
                                dispatch(getMovies({page: page, type: 'movie'}))
                                setSearch('')
                            }}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MoviesList;