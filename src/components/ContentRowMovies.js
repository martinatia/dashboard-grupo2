import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

function ContentRowMovies(props) {
  //transformar a statefull con hooks
  //la props solo debe recibir la api
  const [loading, setLoading] = useState(true);
  // const [endPoint, setEndPoint] = useState(props.api);

  let [valoresTraidos, setValoresTraidos] = useState([]);
  console.log("el tipo de dato de props api es:", typeof(props.api));
  console.log("dentro del contentrowmovies la props api tiene:", props.api);

  // const data = props.api.meta.total;
  // let cifra;
  // if(data){
  //   cifra = data
  // }else{
  //   cifra = "Cargando"
  // }

  useEffect(() => {
    //componentDidMount
    console.log("Component did mount");
  }, []);

  useEffect(async() =>  {
    let fetchData = async () => {
      try {
        let response = fetch(props.api);
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        const data = await response.json();
        setValoresTraidos(data.data);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [valoresTraidos]);

  return (
    <div className="col-md-4 mb-4">
      <div className={props.color + " card shadow h-100 py-2"}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {loading ? "...Cargando" : "algo traido"}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
            </div>
            <div className="col-auto">
              <i className={props.icono + " text-gray-300"}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ContentRowMovies.defaultProps = {
  titulo: "Titulo",
  cifra: "5.0",
  color: "border-left-warning",
  icono: "fas fa-film fa-2x",
};

ContentRowMovies.propTypes = {
  titulo: PropTypes.string.isRequired,
  cifra: PropTypes.number.isRequired,
  color: PropTypes.oneOf([
    "border-left-primary",
    "border-left-success",
    "border-left-warning",
  ]).isRequired,
  icono: PropTypes.string.isRequired,
};

export default ContentRowMovies;
