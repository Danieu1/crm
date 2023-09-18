function Testemunho(){
    return <section id="testemunho">
        <div className="container">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                         <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível o suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas, o 99 CRM tem se revelado uma ferramenta muito útil e intuitiva.</h2>
                         <img src="Images/cliente.jpg"/>                
                            <em>Marcio Martins - São Paulo</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível o suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas, o 99 CRM tem se revelado uma ferramenta muito útil e intuitiva.</h2>
                        <img src="Images/cliente.jpg"/>                
                            <em>João Silva - Rio de Janeiro</em>  
                    </div>   

                </div>

                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </a>
                
            </div>
        </div>
    </section>;
    
  }

export default Testemunho;