export const Contact = (props) => {
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Fale conosco</h2>
               
              </div>
             
              <div className="contact-item">
                {/* <h3>Informações de contato</h3> */}
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              {/* <h3>Informações de contato</h3> */}
              {/* <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p> */}
            </div>
         
          </div>
          <div className="col-md-12">
            <div className="row">

              <div className="social">
                <p className="cnpj">CNPJ: 61.338.931/0001-99</p>

                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
