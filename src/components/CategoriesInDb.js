import React, { useState, useEffect } from "react";
import Category from "./Category";

function CategoriesInDB() {
  const [loading, setLoading] = useState(true);

  let [valoresTraidos, setValoresTraidos] = useState([]);

  useEffect(() => {
    //componentDidMount
    console.log("Component did mount");
  }, []);

  useEffect(async () => {
    let fetchData = async () => {
      try {
        let response = await fetch("http://localhost:3001/api/categories");
        const data = await response.json();
        setValoresTraidos(data.data);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias en la BD
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {valoresTraidos.map((categoria, index) => (
              <Category key={index} titulo={categoria.category_description} />
            ))}
            
        
            
            {/* <Genre titulo="Acción"/>
                    <Genre titulo="Animación"/>
                    <Genre titulo="Aventura"/>
                    <Genre titulo="Ciencia Ficción"/>
                    <Genre titulo="Comedia"/>
                    <Genre titulo="Documental"/>
                    <Genre titulo="Drama"/>
                    <Genre titulo="Fantasia"/>
                    <Genre titulo="Infantiles"/>
                    <Genre titulo= "Musical"/>  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDB;
