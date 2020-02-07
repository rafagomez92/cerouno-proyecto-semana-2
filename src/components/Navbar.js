import React from 'react'

function Navbar() {
    return (  
            //   Este es el navbar, utilicé un navbar-dark 
        <div className="container-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                {/* Le agregué un imagen para acompañar al texto de Karkuma Music */}
                <img src="https://image.flaticon.com/icons/svg/1341/1341168.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                &nbsp; <span className="text-warning">Karkuma Music</span>
                </a>
                {/* Este es el botón para cuando la ventana del navegador se haga más pequeña */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Esta parte es donde agregué a las secciones (Servicios, acerca de, contacto)  */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Servicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Acerca de</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                {/* Esta sección es para las redes sociales, unícamente agregué los iconos extraidos de flaticon */}
                <div className="redes-sociales">
                    <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">                                
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">                
                                <img src="https://image.flaticon.com/icons/svg/1051/1051258.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>                
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">                
                                <img src="https://image.flaticon.com/icons/svg/1051/1051280.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>                
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">                
                                <img src="https://image.flaticon.com/icons/svg/1051/1051262.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>                
                            </a>
                        </li>                
                    </ul>
                </div>
            </nav>  
        </div>      
    );    
}

export default Navbar;