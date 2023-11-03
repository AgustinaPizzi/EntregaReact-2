// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./componentes/NavBar/NavBar";
import Home from "./componentes/Hom/Home";
import Titulo from "./componentes/Titulo/Titulo";
import TituloForm from "./componentes/TituloForm/TituloForm";
import FormContainer from "./componentes/FormContainer/FormContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { ItemCounter } from "./componentes/ItemCounter/ItemCounter";
import "./App.css";

const onAdd = (cant) => {
  console.log("cantidad seleccionada: ", cant);
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tit" element={<Titulo />} />
        <Route path="/detail/:pid" element={<ItemDetailContainer />} />
        <Route path="/item" element={<ItemListContainer />} />
        <Route path="/titform" element={<TituloForm />} />
        <Route path="/form" element={<FormContainer />} />
        <Route
          path="/itemc"
          element={<ItemCounter initial={1} stock={5} onAdd={onAdd} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
