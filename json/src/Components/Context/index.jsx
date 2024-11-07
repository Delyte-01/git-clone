import { createContext,useEffect,useState } from "react";


export const ShoppingContext = createContext(null);

function ShoppingCartProvider({children}){
    const  API_URL ="http://localhost:3500/items";
    const API_URL_PRO ="http://localhost:3500/PlaceHolder";
    // const [loading,setLoading] =useState(false);
    const [listOfProducts,setListOfProducts]=useState([]);
    const [tile,setTile] =useState(null);


    async function fetchListOfProducts(){
        const apiResponse =await fetch(API_URL);
        const result = await apiResponse.json();
        console.log(result)
        setListOfProducts(result)
    };
    
    useEffect(()=>{
       fetchListOfProducts();
    },[])
    // console.log(listOfProducts);

    return(
<ShoppingContext.Provider value={{listOfProducts
    ,tile,
    setTile}}>
    {children}
</ShoppingContext.Provider>
    )


}
export default ShoppingCartProvider