import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function AddProductForm () {

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [location, setLocation] = useState("")
    const nav = useNavigate ();

    function handleSubmit () {
        fetch('http://localhost:3000/products', {
         method: 'POST',
            body: JSON.stringify({
            name: name,
            brand: brand,
            location: location,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(() => {
            toast.success('Successfully deleted!')
            nav('/products')
        });
    }

    return (
        <div className="container mx-auto border border-green-600 px-2 py-2 ">
            <form type="submit" onSubmit={handleSubmit} >
               <label> Name
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/> </label> <br />

                <label>Brand
                <input type="text" placeholder="Brand" value={brand} onChange={(e)=>setBrand(e.target.value)}/> </label> <br />

                <label>Location
                <input type="text" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)}/> </label><br />

                <button>Submit</button>
            </form>
        </div>
    )
}

