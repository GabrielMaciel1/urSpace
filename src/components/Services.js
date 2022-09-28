import meter1 from "../assets/img/logo-teste.jpeg";
import meter2 from "../assets/img/logo-teste.jpeg";
import meter3 from "../assets/img/logo-teste.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="Service" id="Services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Service-bx wow zoomIn">
              <h2>Serviços</h2>
              <p>
                Acreditamos que a multicanalidade e omnicanalidade proporcionam
                a melhor experiência para os seus clientes e, por isso, sua
                empresa deve estar presente de forma otimizada nos canais
                digitais. Oferecemos soluções de:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme Service-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Branding</h5>
                  <h6>
                    estratégia de gestão da marca que visa torná-la mais
                    reconhecida pelo seu público e presente no mercado. A
                    estratégia busca a admiração e desejo pelos valores que a
                    marca cria em torno de si mesma.
                  </h6>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Estratégia de conteúdo</h5>
                  <h6>
                    informação necessária para desenvolver ações precisas
                    visando, em um primeiro momento, a qualidade de vida do
                    consumidor, e, por consequência, a venda e o relacionamento
                    entre ele e a sua marca.
                  </h6>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Gestão de redes sociais</h5>
                  <h6>
                    Serviço completo de gestão de marcas nas redes sociais, com
                    pacotes personalizados para cada necessidade e mercado
                  </h6>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Tráfego Pago</h5>
                  <h6>
                    Campanhas integradas de tráfego pago, focada em fechamento
                    de negócios, onde utilizamos Google Ads, Facebook,
                    Instagram, YouTube, LinkedIn, mídia programática e muito
                    mais...
                  </h6>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
