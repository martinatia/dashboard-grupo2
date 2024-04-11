import React, { useState, useEffect } from "react";
function LastMovieInDb(){

  const [loading, setLoading] = useState(true);

  let [valoresTraidos, setValoresTraidos] = useState([]);

 
  useEffect(() => {
    //componentDidMount
    console.log("Component did mount");
  }, []);

  useEffect(async() =>  {
    let fetchData = async () => {
      try {
        let response = await fetch("http://localhost:3001/api/users/last_added");
        const data = await response.json();
        setValoresTraidos(data.data[0]);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [valoresTraidos]);
    return(
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último usuario registrado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3001/img/usersImageProfile/"+valoresTraidos.profile_image_url} alt="Foto de perfil del último usuario creado."/>
									</div>
									{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p> */}
									<p>Nombre: {valoresTraidos.first_name}</p>
									<p>Apellido: {valoresTraidos.last_name}</p>
									<p>Dirección: {valoresTraidos.address}</p>
									<p>Email: {valoresTraidos.email}</p>
									<p>Usuario registrado en: {valoresTraidos.date_created}</p>
									{/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
								</div>
							</div>
						</div>
    );
}

export default LastMovieInDb;