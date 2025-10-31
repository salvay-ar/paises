import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pais() {
  const [paisInfo, setPaisInfo] = useState({
    nombre: "",
    nombreOficial: "",
    capital: "",
    bandera: "",
    region: "",
  });

  const { pais } = useParams();

  console.log(paisInfo);

  const buscarPais = (e) => {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then((promesa) => promesa.json())
      .then((info) => {
        setPaisInfo({
          nombre: info[0].name.common,
          nombreOficial: info[0].name.official,
          capital: info[0].capital,
          bandera: info[0].flags.png,
          region: info[0].region,
        });
        console.log(pais);
      });
  };

  useEffect(() => {
    buscarPais();
  }, [pais]);

  return (
    <>
      
        <div className="resultado-pais">
          <div className="info-pais">
            <h4>{paisInfo.nombre}</h4>
            <p>
              <strong>Nombre Oficial:</strong> {paisInfo.nombreOficial}
            </p>
            <p>
              <strong>Capital:</strong> {paisInfo.capital}
            </p>
            <p>Región: {paisInfo.region}</p>
          </div>
          <img src={paisInfo.bandera} alt={paisInfo.nombre} />
        </div>
    </>
  );
}

export default Pais;
