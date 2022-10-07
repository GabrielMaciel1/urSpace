import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imageAreli from "../assets/img/image_areli.jpg";
import imageSamuel from "../assets/img/image_samuel.jpg";
import imageWinnie from "../assets/img/image_winne.jpg";
import imageMissao from "../assets/img/missao_image.png";
import imageVisao from "../assets/img/visao_image.png";
import imageValores from "../assets/img/valores_image.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Descriptions = () => {
  const descriptions = [
    {
      title: "Areli Lima",
      office: "Design & Development",
      description:
        "Diretor de Negócios e Projetos Especiais Administrador, especialista em Marketing, com experiência de mais de 12 anos como consultor de negócios e inovação no SEBRAE. É co-curador do espaço de Mídias Digitais da Campus Party Recife, desde sua primeira edição em 2012, e coordenador do Papos em Rede, tradicional evento de discussão sobre comunicação digital, marketing, tecnologia e cybercultura em Fortaleza.",
      imgUrl: imageAreli,
    },
    {
      title: "Samuel Felix",
      office: "Design & Development",
      description:
        "Graduada em Administração pela Universidade Federal do Ceará e mestre em Administração pela Universidade de Fortaleza. Atua na área de Marketing com maior concentração e interesse em ambientes digitais. É consultora e instrutora do Sebrae-NA há mais de 10 anos e diretora administrativo-financeira da Leme Digital.",
      imgUrl: imageSamuel,
    },
    {
      title: "Winnie Fernandes",
      office: "Design & Development",
      description:
        "Começou a trabalhar com Marketing Digital em 2012 e se apaixonou pelas inúmeras possibilidades de conhecimento que a área oferece. Além do interesse em Marketing de Conteúdo, ela também gosta de estudar sobre SEO, Links Patrocinados, Marketing de Influência e Marketing Digital focado na área de Moda.",
      imgUrl: imageWinnie,
    },
  ];

  const missions = [
    {
      title: "Missão",
      description:
        "Apaixonados por publicidade, viemos fazer a mudança do tradicional para o mercado.",
      imgUrl: imageMissao,
    },
    {
      title: "Visão",
      description:
        "Se estabelecer em todos os estados do território nacional com pretensão de se tornar uma multinacional brasileira nos próximos 10 anos.",
      imgUrl: imageVisao,
    },
    {
      title: "Valores",
      description:
        "Uma mescla de liberdade, criatividade e responsabilidade social, sendo justa toda forma de amor.",
      imgUrl: imageValores,
    },
  ];

  return (
    <section className="project" id="Descriptions">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Quem Somos</h2>
                  <p>
                    A UR Space é uma Agência de Marketing e Estratégia
                    localizada em Fortaleza focada em resultados que importam,
                    conteúdos que engajam e ações criativas que encantem seus
                    clientes onde quer que eles se encontrem. Conheça nossos
                    serviços, nossos cases e descubra como podemos ajudar sua
                    empresa.
                  </p>
                  <Tab.Container id="descriptions-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Equipe UR Space</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Visão e Valores</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Depoimentos</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {descriptions.map((project, title) => {
                            return <ProjectCard key={title} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {missions.map((mission, title) => {
                            return <ProjectCard key={title} {...mission} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {descriptions.map((project, title) => {
                            return <ProjectCard key={title} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
