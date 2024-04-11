import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
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
							<ContentRowMovies titulo= "Movies in Data Base" cifra="21" api="http://localhost:3001/api/products" icono= "fas fa-film fa-2x" color="border-left-primary"/>
							<ContentRowMovies titulo= "Total awards" cifra="79" api="http://localhost:3001/api/users"icono="fas fa-award fa-2x" color="border-left-success"/>
							<ContentRowMovies titulo= "Actors quantity" cifra="49" api="http://localhost:3001/api/categories"icono="fas fa-user fa-2x" color="border-left-warning"/>
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

					<div className='row'>
						<Tabla/>
					</div>
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
