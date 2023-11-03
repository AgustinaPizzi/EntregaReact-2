
import Titulo from "../Titulo/Titulo";


const Home = ({ saludo }) => {
  const tituloApp = "EL LIBRO DORADO";
  const subTituloApp = "Librería 📖";

  return (
    <div>
      <Titulo titulo={tituloApp} subTitulo={subTituloApp} />
    </div>
  );
};

export default Home;

