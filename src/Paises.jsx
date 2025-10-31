import { useState } from "react";
import "./Paises.css";
import { Outlet, useNavigate} from "react-router-dom";

function Paises() {
const [paisbuscado, setPaisBuscado] = useState("");
  const navigate = useNavigate();


  const manejarSubmit = (e) => {
     e.preventDefault(); // evita recargar la página
    navigate("/paises/" + paisbuscado.toLowerCase());
  }
  
  return (
    <>
      <div className="contenedor-principal">
        <h3>Introducí el nombre de un país y comenzá a descubrir</h3>
        <p>Ingresá el nombre del país en inglés</p>

        <form onSubmit={manejarSubmit}>
          <input name="nombredelpais" type="text" onChange={(e) => setPaisBuscado(e.target.value)} required />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <Outlet></Outlet>
    </>
  );
}
export default Paises;
