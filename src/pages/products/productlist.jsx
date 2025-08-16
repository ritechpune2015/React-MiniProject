import { useEffect, useState } from "react"
import { api } from "../../api/api";
export function ProductList()
{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        api.get("/ProductAPI").then((response)=>{
            alert("Success!");
            setProducts(response.data);
        }).catch((err)=>alert(JSON.stringify(err)));
    },[]);

    return(<>
    <h2> Product List </h2>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th> Product ID </th>
                <th> Product Name</th>
                <th> Mfg Name </th>
                <th> Price </th>
            </tr>
        </thead>
        <tbody>
 {products.map((item)=><tr key={item.productID}><td>{item.productID}</td><td>{item.productName}</td><td>{item.mfgName}</td><td>{item.price}</td></tr>)}
        </tbody>
    </table>
    </>)
}