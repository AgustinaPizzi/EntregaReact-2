import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { mFetch } from "../../helper/mFetch";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { pid } = useParams();

  console.log(pid);

  useEffect(() => {
    mFetch(pid)
      .then((resultado) => setProduct(resultado))
      .catch((error) => console.log(error));
  }, [pid]);

  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img src={product.imageUrl} alt="" className="img-fluid" />
      </div>
      <div className="col-6 text-center mt-5">
        <p>Nombre: {product.name}</p>
        <p>Autor: {product.author}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio: ${product.price}</p>

        <ItemCounter initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};
export default ItemDetailContainer;
