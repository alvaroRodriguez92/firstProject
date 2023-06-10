import { useContext, useState, createContext } from "react";

const CartContext = createContext({
  numeroCarrito: () => {},
  addUnits: () => {},
  carrito: 0,
  carritoResult:[],
  loading:true
  
});

export default function CartContextProvider({ children }) {
  const [carritoResult, setCarritoResult] = useState([]);
  const [carrito, setCarrito] = useState(0);
  const [loading, setLoading] = useState(true);


  async function numeroCarrito(producto,id) {
    let encontrado= false;
    console.log(id)
    setCarrito(carrito+1);

    for(let i=0; i<carritoResult.length; i++){
        if(carritoResult[i].id ===id){
            encontrado = true
            carritoResult[i].unidades++
            break
        } else{
            encontrado=false;
        }
    }
        if(!encontrado){
            setCarritoResult(currentsProduct => [...currentsProduct, {...producto, unidades:1}]);
            
        }       
  }


  function addUnits(e, id){
    const auxCarritoResult = [...carritoResult]

    const producto = auxCarritoResult.find(item=>item.id===id)
    producto.unidades=e.target.value
    setCarritoResult(auxCarritoResult)

    console.log(producto)
  }




  const value = {
    numeroCarrito,
    carrito,
    carritoResult, 
    addUnits, 
}
// unidades  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
