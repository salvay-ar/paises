import { useState } from "react";
import "./Paises.css";

function Paises() {
  const [pais, setPais] = useState({
    nombre: "",
    nombreOficial: "",
    capital: "",
    bandera: "",
    region: "",
  });

  const buscarPais = (e) => {
    e.preventDefault(); //Porque es un form
    const nombrePais = e.target.nombredelpais.value; //Toma el valor del país escrito en el input

    fetch("https://restcountries.com/v3.1/name/" + nombrePais)
      .then((promesa) => promesa.json())
      .then((info) => {
        setPais({
          nombre: info[0].name.common,
          nombreOficial: info[0].name.official,
          capital: info[0].capital,
          bandera: info[0].flags.png,
          region: info[0].region,
        });
        console.log(pais);
      });
  };

  return (
    <>
      <div className="contenedor-principal">
        <h3>Introducí el nombre de un país y comenzá a descubrir</h3>
        <p>Ingresá el nombre del país en inglés</p>

        <form onSubmit={buscarPais}>
          <input name="nombredelpais" type="text" required />
          <button type="submit">Buscar</button>
        </form>

        {pais.nombre && (
          <div className="resultado-pais">
            <div className="info-pais">
            <h4>{pais.nombre}</h4>
            <p>
              <strong>Nombre Oficial:</strong> {pais.nombreOficial}
            </p>
            <p>
              <strong>Capital:</strong> {pais.capital}
            </p>
            <p>Región: {pais.region}</p>
            </div>
            <img src={pais.bandera} alt={pais.nombre} />
          </div>
        )}
      </div>
    </>
  );
}
export default Paises;
