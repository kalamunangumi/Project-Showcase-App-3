import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Products () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then((data) => {
            setProducts(data)
            console.log(data)
        }
        )}  
        , [])

    return (
        <div>
            <h3 className="mx-2">Number of products: {products.length}</h3>            
            {
            products && products.map((product) => (
                <div key={product.id} className="grid my-4 font-semibold bg-gray-100 border border-gray-300 p-4 rounded">
                    <Link to ={`/products/${product.id}`}><p className="bg-amber-900">{product.name}</p></Link>
                    <p>{product.brand}</p>
                    <p>{product.location}</p>
                    <button className="bg-gray-500 text-white p-4">View</button>
                </div>
            ))

            }
        </div>
    )
}