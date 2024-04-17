import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, selectProducts} from "../store/actions/productSlice";
import ProductCard from "../components/ProductCard";
import {Products} from "../utils/types";
import {store} from "../store";

const ProductList: React.FC = () => {
    const {Search, totalResults} = useSelector(selectProducts)
    const [selectedOption, setSelectedOption] = useState('');
    const [filteredData, setFilteredData] = useState<Products[]>(Search)
    const mappingData = filteredData?.length > 0 ? filteredData : (Search || [])
    const totalPages = +totalResults / 10
    const dispatch=useDispatch()
    console.log(Search)
    console.log(totalPages)
    return (
        <div className="flex flex-wrap gap-6 align-middle ">
            <input/>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-400">
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
                        <tr key={product.imdbID}>
                            <td className="border px-4 py-2">{product.Title}</td>
                            <td className="border px-4 py-2">{product.Year}</td>
                            <td className="border px-4 py-2">{product.Type}</td>
                            <td className="border px-4 py-2">{product.imdbID}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() =>store.dispatch(fetchProducts({page:page}))}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;