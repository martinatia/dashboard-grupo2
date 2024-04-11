import React from 'react';
import ContentRowMovies from './ContentRowTablas';
import LastMovieInDb from './LastUserInDb';
import GenresInDb from './CategoriesInDb';
import Tabla from './Tabla';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
							<ContentRowMovies titulo= "Productos" api="http://localhost:3001/api/products" icono= "fas fa-shoe-prints fa-2x" color="border-left-primary"/>
							<ContentRowMovies titulo= "Usuarios"  api="http://localhost:3001/api/users"icono="fas fa-user fa-2x" color="border-left-success"/>
							<ContentRowMovies titulo= "Categorias" api="http://localhost:3001/api/categories"icono="fas fa-list fa-2x" color="border-left-warning"/>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
							<LastMovieInDb/>
						{/*<!-- End content row last movie in Data Base -->*/}
							<GenresInDb/>
						{/*<!-- Genres in DB -->*/}
						
					</div>

					{/* <div className='row'>
						<Tabla/>
					</div> */}
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
