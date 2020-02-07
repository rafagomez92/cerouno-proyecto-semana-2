import React from 'react';

function MainCard(props) {
    return (
        // Dividí en dos partes esta sección del blog principal, 
        // la primera agregué el texto de bloc y un buscador
        // en la segunda parte agregue el contenido del blog principal con elemento card 
        <div className="container-blog-main mt-2">
            {/* Seccion donde esta ingresado bloc y el buscador */}
            <div className="text-blog-search">
                <div className="container-fluid">                    
                    <div className="row justify-content-around">
                        {/* En esta parte de código nos sirve para alinear a la deracha nuestro h4 */}
                        <div className="col-4 text-right">                            
                            <h4>Blog</h4>
                        </div>
                        <div className="col-4">
                            {/* Este es el código del buscador */}
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscador" aria-label="Search"/>
                                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>                    
                </div>            
            </div>                            
            {/* Esta es la segunda parte del código donde se ingresa el blog principal */}
            <div className="blog-principal mt-2">
                {/* Para ocupar la mayor parte de la pantalla agregué el container-fluid */}
                <div className="container-fluid">
                    {/* Codigo del card donde se agrega la imagen y el texto con la información */}
                  <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={props.imgUrl} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8 text-white bg-dark">
                        <div className="card-body ">
                            <h1 className="card-title">{props.title}</h1>
                            <p className="card-text">{props.subtitle}</p>        
                            <button type="button" className="btn btn-warning text-white">Ingresar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    );
}




export default MainCard;

