import { useRef } from 'react';
import { Container, Row, Col, Navbar, Nav, Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Menu, MessageCircle, Mail, Phone } from 'lucide-react';
import er from './images/er.png'
import samuel from './images/Samuel.png'
import davi from  './images/Davi.jpeg'
import yasser from  './images/Yasser.jpeg'
import miguel from  './images/Miguel.jpeg'
import pedroPaulo from  './images/Pedro.jpeg'
import pedroAbrantes from  './images/PedroAbrantes.jpeg'
import kelvyn from  './images/Kelvyn.jpeg'
import lucas from  './images/Lucas.jpeg'
import lima from  './images/Lima.jpeg'
import rubim from  './images/Rubim.jpeg'
import nelson from  './images/Nelson.jpeg'
import rodolfo from  './images/Rodolfo.jpeg'
import img1 from './images/Img1.jpeg'
import img2 from './images/Img2.jpeg'
import img3 from './images/Img3.jpeg'
import img4 from './images/Img4.jpeg'
import img5 from './images/Img5.jpeg'
import img6 from './images/Img6.jpeg'
import img7 from './images/Img7.jpeg'
import edvan from './images/Edvan.jpeg'
import marcelo from './images/Marcelo.jpeg'
import ricardo from './images/Ricardo.jpeg'

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
      name: 'Pastor Tiago Lima',
      role: 'Pastor Presidente',
      image: lima
    },
    {
      id: 2,
      name: 'Pastor Tiago Rubim',
      image: rubim
    },
    {
      id: 3,
      name: 'Pastor Rodolfo',
      role: 'Pastor dos Jovens e Adolescentes',
      image: rodolfo
    },
    {
      id: 4,
      name: 'Pastor Nelson',
      image: nelson
    },
    {
      id: 5,
      name: 'Pastor Edvan Xavier',
      role: 'Pastor dos Casais',
      image: edvan
    }
  ];

  // Dados da diretoria
  const directors = [
    {
      id: 1,
      name: 'Samuel Moraes',
      role: 'Embaixador Chefe',
      image: samuel
    },
    {
      id: 2,
      name: 'Davi Talon',
      role: 'Embaixador Assistente',
      image: davi
    },
    {
      id: 3,
      name: 'Yasser Salleh',
      role: 'Intendente',
      image: yasser
    },
    {
      id: 4,
      name: 'Miguel Talon',
      role: 'Secretário',
      image: miguel
    },
    {
      id: 5,
      name: 'Pedro Abrantes',
      role: 'Secretário',
      image: pedroAbrantes
    },
    {
      id: 6,
      name: 'Pedro Paulo',
      role: 'Porta-Voz',
      image: pedroPaulo
    },
    {
      id: 7,
      name: 'Kelvyn Ribeiro',
      role: 'Cônsul Alvin Hatton',
      image: kelvyn
    },
    {
      id: 8,
      name: 'Lucas Batista',
      role: 'Cônsul Luther King',
      image: lucas
    },
    {
      id: 9,
      name: 'Milton Julio',
      role: 'Conselheiro',
      image: 'https://images.unsplash.com/photo?w=200&h=200&fit=crop&blur=100'
    },
    {
      id: 10,
      name: 'Marcelo Adami',
      role: 'Conselheiro',
      image: marcelo
    },
    {
      id: 11,
      name: 'Ricardo Abrantes',
      role: 'Conselheiro',
      image: ricardo
    }
  ];

  // Imagens do carrossel
  const carouselImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];

  return (
    <>
      {/* NAVBAR */}
      <Navbar sticky="top" className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand className="brand-logo" href="#home">
            <img 
              src={er} 
              alt="Logo Embaixadores do Rei"
              className="brand-icon-image"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <span>Embaixada Pastor Ednézer Faria</span>
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
                <img 
                  src={er} 
                  alt="Logo Embaixadores do Rei"
                  className="hero-icon-image animate-fade-in"
                  style={{ width: '150px', height: '150px', marginBottom: '20px' }}
                />
                <h1 className="hero-title">Embaixadores do Rei</h1>
                <p className="hero-subtitle">
                  Uma vez embaixador, sempre embaixador do Rei!
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
                Os <strong>Embaixadores do Rei</strong> das igrejas batistas, dedicada ao desenvolvimento espiritual, moral e social de meninos de 9 a 17 anos. Buscamos ensinar os meninos a serem verdadeiros representantes de Jesus aqui na Terra. Baseamo-nos em 5 ideias: Oração, Missões, Mordomia, Serviço Real e Estudo da Bíblia. Possuímos várias atividades, como estudo bíblico, evangelismo, práticas esportivas e acampamentos.
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
                A Terceira Igreja Batista em Cabo Frio não é apenas um templo, mas sim uma comunidade de fé de pessoas imperfeitas em busca da perfeição em Cristo Jesus. Uma história viva, um marco de fé nesta cidade tão especial.
              </p>
              <p className="church-text">
                Cada culto, cada oração, cada lágrima e cada sorriso constroem uma trajetória marcada por vitórias,  milagres, restauração de famílias e esperança renovada.
              </p>
              <p className="church-text">
                Nossa igreja cresce junto com Cabo Frio, servindo a cidade, acolhendo pessoas e sendo luz em tempos de alegria e também de dificuldades.
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
                        background: `linear-gradient(135deg, #1a3a5c 0%, #2d5f8a 100%)`,
                        overflow: 'hidden',
                        borderRadius: '50%'
                      }}
                    >
                      {pastor.image && typeof pastor.image === 'string' && pastor.image.startsWith('http') ? (
                        <img 
                          src={pastor.image} 
                          alt={pastor.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : pastor.image ? (
                        <img 
                          src={pastor.image} 
                          alt={pastor.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <span className="pastor-initials">
                          {pastor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
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

      {/* SEÇÃO NOSSA HISTÓRIA - TIMELINE */}
      <section id="nossa-historia" ref={historyRef} className="section-history">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Nossa História</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                A história da Embaixada na Terceira Igreja Batista em Cabo Frio é uma bela história, a qual passa por diversas pessoas e gerações.
                Em nossa igreja, decidiu-se em 1986, em assembleia, pelo retorno das atividades da Sociedade de Homens Missionários o que foi bastante relevante e proporcionou a organização da primeira Embaixada da igreja que no tempo tinha 5 anos.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              <div className="timeline">
                {/* PERÍODO 1: 1986-1994 */}
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">O Início e a Fundação</h3>
                      <span className="timeline-year">1986 – 1994</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Após a posse do Pr. Jânio Cosendey Nunes em 1986, foi organizada a primeira Embaixada, 
                        que inicialmente levou seu nome.
                      </p>
                      <div className="timeline-details">
                        <h4>Primeiros Conselheiros:</h4>
                        <p>Jorge Manoel Sabino e Flaviano de Souza Cruz</p>
                        
                        <h4>Marco Regional:</h4>
                        <p>Em 1987, participamos da criação do FORTE (Frente de Operação Regional)</p>
                        
                        <h4>Destaques:</h4>
                        <p>Atuação do Chanceler Robson Lima Campos e diversos conselheiros como Carlos Berlindo, Oziel Freitas e Hélio Dias</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERÍODO 2: 2003-2014 */}
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">Reorganização e Expansão</h3>
                      <span className="timeline-year">2003 – 2014</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Após um período de espera, o trabalho foi retomado em 2003 com o curso de conselheiro 
                        do irmão Romildo Barbosa da Silva Junior.
                      </p>
                      <div className="timeline-details">
                        <h4>Novo Nome:</h4>
                        <p>Em 26 de junho de 2004, a organização passou a se chamar <strong>Embaixada Pr. Ednezer Farias</strong></p>
                        
                        <h4>Colaboradores:</h4>
                        <p>Uma nova geração somou forças, incluindo Widson Sabino, Pr. Tiago Rubim, Mike Abdala e muitos outros que mantiveram a chama acesa até 2014</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERÍODO 3: 2019-Presente */}
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot timeline-dot-current"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">A Nova Fagulha</h3>
                      <span className="timeline-year">2019 – Presente</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Em 2019, o conselheiro Deivison Mendonça Monteiro iniciou um movimento de revitalização 
                        junto à liderança da igreja.
                      </p>
                      <div className="timeline-details">
                        <h4>Fase Atual:</h4>
                        <p>Desde 2022, os conselheiros Milton Júlio, Marcelo e Ricardo assumiram o trabalho com afinco, 
                        garantindo que novos meninos continuem ouvindo a mensagem do Evangelho</p>
                      </div>
                    </div>
                  </div>
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
                          background: `linear-gradient(135deg, #c4942b 0%, #d4a745 100%)`,
                          overflow: 'hidden',
                          borderRadius: '50%'
                        }}
                      >
                        {director.image && typeof director.image === 'string' && director.image.startsWith('http') ? (
                          <img 
                            src={director.image} 
                            alt={director.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : director.image ? (
                          <img 
                            src={director.image} 
                            alt={director.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <span className="director-initials">
                            {director.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
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
                href="https://wa.me/5522992673561" 
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
                href="mailto:er.tibcf@gmail.com"
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
              <h5 className="footer-title">Data de Reunião e Horário</h5>
              <p className="footer-text">
                Toda Quarta às 19h
              </p>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="footer-title">Endereço</h5>
              <p className="footer-text">
                Av. Adolfo Beranger Júnior, 221 - Jardim Nautilus, Cabo Frio - RJ, 28909-030
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
                <strong>Email:</strong> er.tibcf@gmail.com<br />
                <strong>WhatsApp:</strong> (22) 99267-3561
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
