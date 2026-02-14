import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Product () {

    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then((data) => {
            setProduct(data)
            console.log(data)
        }
        )}
        , [])

    function onDelete() {
        fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        })
        .then(res =>res.json)
        .then(() => {
            toast.success('Successfully deleted!')
            nav('/products')
        }
        )
    }   

    return (
        <div>
            {      
            <div key={product.id} className="grid my-4 font-semibold bg-gray-100 border border-gray-300 p-4 rounded">
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>{product.location}</p>

                <div className="grid grid-cols-3">
                    <button onClick={()=>nav(-1)} className="bg-gray-500 text-white px-1.5 py-1.5 mx-1.5 ">Back</button>
                    <button className="bg-gray-500 text-white px-1.5 py-1.5 mx-1.5">Edit</button>
                    <button onClick= {onDelete}className="bg-red-700 text-white px-1.5 py-1.5 mx-1.5">Delete</button>
                </div>
            </div>    
            }
        </div>
    )
}