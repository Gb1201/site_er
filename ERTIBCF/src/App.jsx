import { useRef } from 'react';
import { Container, Row, Col, Navbar, Nav, Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Menu, MessageCircle, Mail, Phone } from 'lucide-react';

export default function App() {
  const aboutRef = useRef(null);
  const churchRef = useRef(null);
  const historyRef = useRef(null);
  const directoryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dados dos pastores (com imagens placeholder)
  const pastors = [
    {
      id: 1,
      name: 'Pastor Eliseu',
      role: 'Pastor Presidente',
      image: 'https://images.unsplash.com/photo?w=200&h=200&fit=crop&blur=100'
    },
    {
      id: 2,
      name: 'Pastor Carlos',
      role: 'Pastor Vice-Presidente',
      image: 'https://images.unsplash.com/photo?w=200&h=200&fit=crop&blur=100'
    }
  ];

  // Dados da diretoria
  const directors = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Diretor de Louvor',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Diretora de Visitação',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      role: 'Diretor de Ações Sociais',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    },
    {
      id: 4,
      name: 'Ana Costa',
      role: 'Diretora de Estudos Bíblicos',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    },
    {
      id: 5,
      name: 'Lucas Ferreira',
      role: 'Diretor de Eventos',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    },
    {
      id: 6,
      name: 'Beatriz Gomes',
      role: 'Diretora Secretária',
      image: 'https://images.unsplash.com/photo?w=150&h=150&fit=crop&blur=100'
    }
  ];

  // Imagens do carrossel
  const carouselImages = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1511429035069-717cdc657a25?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=500&fit=crop'
  ];

  return (
    <>
      {/* NAVBAR */}
      <Navbar sticky="top" className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand className="brand-logo" href="#home">
            <span className="brand-icon">👑</span>
            <span>Embaixada Pastor Ednezer Faria</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>Sobre</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(churchRef)}>Nossa Igreja</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(historyRef)}>Nossa História</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(directoryRef)}>Diretoria</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(contactRef)}>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-center min-vh-100">
            <Col lg={8} className="text-center">
              <div className="hero-content">
                <div className="hero-icon animate-fade-in">👑</div>
                <h1 className="hero-title">Embaixadores do Rei</h1>
                <p className="hero-subtitle">
                  Servindo Cristo com fidelidade, amor e dedicação
                </p>
                <button 
                  className="cta-button"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  Conheça Nossa Missão
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-wave"></div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" ref={aboutRef} className="section-about">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Sobre Embaixadores do Rei</h2>
              <div className="title-underline"></div>
            </Col>
          </Row>
          
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <p className="about-text">
                Os <strong>Embaixadores do Rei</strong> é uma organização missionária dedicada ao serviço de Cristo 
                e ao bem-estar da comunidade. Nós acreditamos que a verdadeira fé se manifesta através de ações 
                concretas de amor ao próximo.
              </p>
              <p className="about-text">
                Nossa missão é promover o evangelho de Jesus Cristo através de projetos sociais, visitação fraternal, 
                estudos bíblicos e eventos que fortaleçam a comunidade cristã e testemunhem o amor de Deus.
              </p>
              <p className="about-text">
                Cada membro é um embaixador, representando o Reino de Deus através da excelência, 
                dedicação e compromisso com os princípios cristãos.
              </p>
            </Col>
            <Col lg={6}>
              <Carousel className="carousel-custom">
                {carouselImages.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100 carousel-image"
                      src={image}
                      alt={`Slide ${idx + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SEÇÃO NOSSA IGREJA */}
      <section id="nossa-igreja" ref={churchRef} className="section-church">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Nossa Igreja</h2>
              <div className="title-underline"></div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <p className="church-text">
                Nossa Igreja é fundada em Cristo, a Rocha inabalável. Somos uma comunidade de fé que se reúne 
                para louvar a Deus, estudar Sua Palavra e servir ao próximo com integridade e amor. 
                Acreditamos em um Deus vivo, amoroso e presente em nossas vidas.
              </p>
              <p className="church-text">
                Os pastores que lideram nossa congregação dedicam suas vidas ao pastoreio fiel, 
                procurando sempre o bem-estar espiritual de cada membro.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center g-4">
            {pastors.map((pastor) => (
              <Col key={pastor.id} md={6} lg={4} className="text-center">
                <div className="pastor-card">
                  <div className="pastor-image-wrapper">
                    <div 
                      className="pastor-image"
                      style={{
                        background: `linear-gradient(135deg, #1a3a5c 0%, #2d5f8a 100%)`
                      }}
                    >
                      <span className="pastor-initials">
                        {pastor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="pastor-name">{pastor.name}</h4>
                  <p className="pastor-role">{pastor.role}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SEÇÃO NOSSA HISTÓRIA */}
      <section id="nossa-historia" ref={historyRef} className="section-history">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Nossa História</h2>
              <div className="title-underline"></div>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              <div className="history-card">
                <div className="history-content">
                  <h3>Uma Jornada de Fé e Serviço</h3>
                  <p>
                    Os Embaixadores do Rei nasceram de um sonho compartilhado: criar um espaço onde jovens 
                    e adultos pudessem unir fé e ação prática. Desde nossa fundação, temos trabalhado 
                    incansavelmente para levar o evangelho através de projetos sociais, visitação fraternal 
                    e apoio à comunidade.
                  </p>
                  <p>
                    Nossa história é marcada por muitos testemunhos de transformação, vidas tocadas pela 
                    graça de Deus, famílias restauradas e comunidades fortalecidas. Cada ação, cada 
                    encontro, cada oração é um capítulo na história maior da obra de Deus em nossas vidas.
                  </p>
                  <p>
                    Hoje, continuamos caminhando com esperança e determinação, sabendo que o Rei Jesus 
                    está no controle de nossas vidas e da história. Convidamos você a fazer parte dessa 
                    jornada extraordinária de fé, serviço e transformação.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SEÇÃO DIRETORIA */}
      <section id="diretoria" ref={directoryRef} className="section-directory">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Nossa Diretoria</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                Conheça os líderes que dedicam seus talentos ao serviço do Reino de Deus
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {directors.map((director) => (
              <Col key={director.id} md={6} lg={4} className="text-center">
                <div className="director-card">
                  <div className="director-image-wrapper">
                    <div 
                      className="director-image"
                      style={{
                        background: `linear-gradient(135deg, #c4942b 0%, #d4a745 100%)`
                      }}
                    >
                      <span className="director-initials">
                        {director.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="director-name">{director.name}</h4>
                  <p className="director-role">{director.role}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" ref={contactRef} className="section-contact">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Entre em Contato</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                Ficamos felizes em ouvir de você. Envie uma mensagem ou entre em contato conosco
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={6}>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-button whatsapp-button"
              >
                <MessageCircle size={24} />
                <span>Envie mensagem via WhatsApp</span>
              </a>
            </Col>
            <Col md={6}>
              <a 
                href="mailto:contato@embaixadoresdorei.com"
                className="contact-button email-button"
              >
                <Mail size={24} />
                <span>Envie um Email</span>
              </a>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="contact-form-wrapper">
                <h3>Formulário de Contato</h3>
                <Form className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Digite seu nome"
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="seu.email@exemplo.com"
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5}
                      placeholder="Digite sua mensagem aqui..."
                      className="form-input"
                    />
                  </Form.Group>

                  <Button className="btn-submit" type="submit">
                    Enviar Mensagem
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <Container>
          <Row className="py-4">
            <Col lg={4} className="mb-4">
              <h5 className="footer-title">Embaixadores do Rei</h5>
              <p className="footer-text">
                Servindo Cristo com fidelidade, amor e dedicação à comunidade.
              </p>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="footer-title">Links Rápidos</h5>
              <ul className="footer-links">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#nossa-igreja">Nossa Igreja</a></li>
                <li><a href="#diretoria">Diretoria</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="footer-title">Contato</h5>
              <p className="footer-text">
                <strong>Email:</strong> contato@embaixadoresdorei.com<br />
                <strong>WhatsApp:</strong> (11) 99999-9999
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center border-top pt-4">
              <p className="footer-copyright">
                © 2024 Embaixadores do Rei. Todos os direitos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
