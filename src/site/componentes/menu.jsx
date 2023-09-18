import React from 'react';

function Menu(){
    return <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="#">RMC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='container'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#">Clientes <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#">Planos e Preços <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#">Contato <span className="sr-only">(current)</span></a>
                </li>
                
            </ul>
            </div>
        </div>
  </nav>
}

export default Menu;