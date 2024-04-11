import Genre from './Genre';

function GenresInDB(){
    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row"> {/* No pedia, pero cree otro componente p/c genero */}
                    <Genre titulo="Acción"/>
                    <Genre titulo="Animación"/>
                    <Genre titulo="Aventura"/>
                    <Genre titulo="Ciencia Ficción"/>
                    <Genre titulo="Comedia"/>
                    <Genre titulo="Documental"/>
                    <Genre titulo="Drama"/>
                    <Genre titulo="Fantasia"/>
                    <Genre titulo="Infantiles"/>
                    <Genre titulo= "Musical"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GenresInDB;