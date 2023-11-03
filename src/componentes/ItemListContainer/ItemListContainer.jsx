import { useEffect, useState } from "react";
import { mFetch } from "../../helper/mFetch";
import { ItemList } from "../ItemList/ItemList";

function ItemListContainer({ greeting = "BIENVENIDO 👋🏼" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cid) {
      mFetch()
      .then((resultado) => setProducts(resultado))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }else{
      mFetch()
      .then(resultado => setProducts(resultado))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }
    
  }, [cid]);

  const onAdd = cant => {
    console.log('cantidad seleccionada: ',cant)
  }

  return (
    <>
      <center>{greeting}</center>

      <div className="d-flex justify-content-center align-items-center">
        {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
      </div>
    </>
  );
}

export default ItemListContainer;
