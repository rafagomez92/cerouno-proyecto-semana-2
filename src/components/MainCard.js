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
                <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center text-warning">Blog</h1>
                </div>            
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
                            {/* En esta sección he utilizado los props ingresados en el js de App */}
                            <img src={props.imgUrl} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8 text-white bg-dark">
                        <div className="card-body ">
                            <h6 className="categories"><img src="https://image.flaticon.com/icons/svg/148/148947.svg" weight="15" height="15"/>&nbsp;{props.category}</h6>                        
                            <h1 className="card-title">{props.title}</h1>
                            <p className="card-text">{props.subtitle}</p>                            
                            {/* El boton es el unico elemento de este card que no utilice props */}
                            <button type="button" className="btn btn-warning text-white mb-2">Ingresar</button>
                            <p className="text text-left">
                                <img src="https://image.flaticon.com/icons/svg/1100/1100803.svg" weight="15" height="15"/>
                                &nbsp;{props.date}                            
                            </p>
                            <p className="text text-left">
                                <img src="https://image.flaticon.com/icons/svg/1077/1077012.svg" weight="15" height="15"/>
                                &nbsp;{props.author}
                            </p>                                                
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

