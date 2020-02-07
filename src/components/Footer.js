import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <div className="card text-center text-white bg-dark">
                        <div className="card-header">
                            Lo que tenemos para ti
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Descubre el mundo del rock</h5>
                            <p className="card-text">No te pierdas de las mejores listas semanales.</p>                            
                            <form className="form-inline justify-content-center mb-4" id="suscribete">                    
                                <div className="form-group mx-sm-3 mb-2">                  
                                    <input type="email" className="form-control" id="inputMail" placeholder="Email"/>
                                </div>
                                    <button type="submit" onclick='alert("Gracias por suscribirse")' className="btn btn-warning text-white mb-2 font-weight-bold">Suscríbete</button>
                            </form> 
                        </div>

                        
                        
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;