import { Filter } from "./Filter";
import { Link } from "react-router-dom";

const productFiltered = ({ products, filterState, handleFilterChange }) => (
  <>
    <div className="btn-buscar">
      <label>Buscar</label>
      <input
        className="form-control"
        type="text"
        value={filterState}
        onChange={handleFilterChange}
      />
    </div>
    <br />

    {filterState === ""
      ? products.map((product) => (
          <div className="card w-25">
            <img src={product.imageUrl} className="img-card" />
            <div className="card-body">
              <p className="nombre">Nombre: {product.name}</p>
              <p className="autor">Autor: {product.author}</p>
              <p className="cat">Categoria: {product.category}</p>
              <p className="precio">Precio: ${product.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`/detail/${product.id}`}>
                <button className="btn btn-outline-dark w-100">Detalle</button>
              </Link>
            </div>
          </div>
        ))
      : products
          .filter((prod) =>
            prod.name.toLowerCase().includes(filterState.toLowerCase())
          )
          .map((product) => (
            <div className="card w-25">
              <img src={product.imageUrl} className="img-card" />
              <div className="card-body">
                <p>Nombre: {product.name}</p>
                <p>Autor: {product.author}</p>
                <p>Categoria: {product.category}</p>
                <p>Precio: ${product.price}</p>
              </div>
              <div className="card-footer">
                <Link to="/detail">
                  <button className="btn btn-outline-dark w-100">
                    Detalle
                  </button>
                </Link>
              </div>
            </div>
          ))}
  </>
);

export const ItemList = ({ products }) => {
  return <Filter products={products}>{productFiltered}</Filter>;
};
