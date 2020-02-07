import React from 'react';

function Blog(props) {
    return (
        <div className="col-md-4 border text-white bg-dark">
            {/*En este h6 se incluye el nombre de la categoría en el cual incluí un icono de carpeta*/}
            <div className="card-header">
            <h6 className="categories"><img src="https://image.flaticon.com/icons/svg/148/148947.svg" weight="15" height="15"/>&nbsp;{props.category}</h6>                        
            </div>
            {/* Imagen del blog */}
            <img src={props.imgUrl} className="img-thumbnail"/>
            {/* Titulo del blog */}
            <h5 className="service-heading mt-2 text-center">{props.title}</h5>
            {/* Extracto o contenido del blog */}
            <p className="text text-justify">{props.content}</p>
            <div className="text-right">
                {/* Agregué un botón para ir al blog, coloque un div padre para poder centrar el botón a la derecha*/}
                <button type="button" className="btn btn-warning text-white font-weight-bold mb-1">Leer más</button>
            </div>                        
            {/* Esta ultima parte del código es la fecha de creación y el autor con sus respectivos iconos */}
            <p className="text text-left">
                <img src="https://image.flaticon.com/icons/svg/1100/1100803.svg" weight="15" height="15"/>
                &nbsp;{props.date}                            
            </p>
            <p className="text text-left">
                <img src="https://image.flaticon.com/icons/svg/1077/1077012.svg" weight="15" height="15"/>
                &nbsp;{props.author}
            </p>                                                
        </div>                                                                                
    );
}

export default Blog;