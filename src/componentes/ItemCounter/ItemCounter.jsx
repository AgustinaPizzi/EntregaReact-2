import { useCounter } from "../hooks/useCounter";

export const ItemCounter = ({ initial = 1, stock = 10, onAdd }) => {
  const { count, handleResta, handleSuma } = useCounter(initial, stock);

  const handleOnAdd = () => {
    onAdd(count);
  };
  return (
    <div className="text-center">
      <div>
        <p className="contador">{count}</p>
      </div>
      <div>
        <button className="btn-carro" onClick={handleSuma}>
          {" "}
          +{" "}
        </button>
        <button className="btn-carro" onClick={handleResta}>
          {" "}
          -{" "}
        </button>
        <button className="btn-carro" onClick={handleOnAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
