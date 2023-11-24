import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";

export function Link({ href, children }) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    )
}

export function Menu() {
    return (
        <div>
            <ul className="menu">
                <Link href="/"><FaLinkedin /></Link>
                <Link href="/"><FaGithub /></Link>
            </ul>
        </div>
    );
}

export function Home() {
    return (
        <div>
            <header>
                <ConteudoHome />
            </header>
        </div>
    );
}

export function Usergit() {
    const [userData, setUserData] = useState(null);
    const username = 'edilsonbaggio'; 
    const user = {
        avatar_size: '150',
    };
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            setUserData(data);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do usuário:', error);
        });
    }, []);

    return (
        <div>
        {userData ? (
            <div>
                <div className="row">
                    <div className="col-sm-9 nome">
                        <h1>{userData.name}</h1>
                        <p><span>DevOps</span>Fullstack</p>
                    </div>
                    <div className="col-sm-3 foto">
                    <Image 
                        className="user-avatar"
                        src={userData.avatar_url}
                        alt={`Imagem de perfil de ${userData.name}`}
                        width={userData.avatar_size}
                        height={user.avatar_size} roundedCircle />
                    </div>
                </div>
                </div>
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </div>
    );
}

export function Followersgit() {
    const [userData, setUserData] = useState(null);
    const username = 'edilsonbaggio'; // Substitua pelo nome de usuário do GitHub desejado

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            setUserData(data);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do usuário:', error);
        });
    }, []);

    return (
        <div>
        {userData ? (
                <div>
                    <div className="follow d-grid mt-3">
                        <h4>GitHub</h4>
                        <p className='mb-3'>{userData.location}</p>
                        <p className='mb-3'><a href={userData.blog}>edilsonsantos.website</a></p>
                        <p className='mb-3'>{userData.bio}</p>
                        <span>Seguidores</span>
                        <ProgressBar animated variant="success" now={userData.followers} />
                        <span>Seguindo</span>
                        <ProgressBar animated variant="success" now={userData.following} />
                    </div>
                </div>
            ) : (
                <Spinner animation="border" variant="info" />
            )}
        </div>
    );
}

export function ConteudoHome() {
    return (
        <div className="content-home">
            <div className="content-titulo">
               <Usergit />
            </div>
            <div className="row">
                <div className="col-sm-9 curriculo">
                    <div className="row">
                        <div className="col-sm-12 content-left">
                            <h2>Experiência</h2>
                            <h3>DevOps Fullstack</h3>
                            <h4>Kasi Desenvolvimento e Soluções em TI</h4>
                            <span>Fevereiro 2021 - Atual - 3 anos</span>
                            <p>Desenvolvimento de interfaces front-end responsivas e interativas usando HTML, CSS e JavaScript.</p>
                            <p>Colaboração com a equipe de design e back-end para implementar as especificações visuais e funcionais do projeto.</p>
                            <p>Otimização de desempenho e compatibilidade com diferentes navegadores.</p>
                            <p>Participação em revisões de código e melhorias contínuas do projeto.</p>
                            <p>Integração de APIs e serviços web para garantir a comunicação eficiente com o back-end.</p>
                            <p>Testes de unidade e integração para garantir a qualidade do código entregue.</p>
                            <p>Resolução de bugs e problemas de compatibilidade.</p>
                        </div>
                        <div className="col-sm-12 content-left">
                            <h2>Experiência</h2>
                            <h3>Desenvolvedor Fullstack</h3>
                            <h4>Afonso Carlos Sandríni</h4>
                            <span>Setembro 2014 - 6 anos</span>
                            <p>Desenvolvimento de interfaces front-end responsivas e interativas usando HTML, PHP, CSS e JavaScript.</p>
                            <p>Colaboração com a equipe de design e back-end para implementar as especificações visuais e funcionais do projeto.</p>
                            <p>Otimização de desempenho e compatibilidade com diferentes navegadores.</p>
                            <p>Participação em revisões de código e melhorias contínuas do projeto.</p>
                            <p>Integração de APIs e serviços web para garantir a comunicação eficiente com o back-end.</p>
                        </div>
                        <div className="col-sm-12 content-left">
                            <h2>Experiência</h2>
                            <h3>Desenvolvedor Front-end</h3>
                            <h4>Libero +</h4>
                            <span>Janeiro 2014 - Atual - 6 anos</span>
                            <p>Desenvolvimento de interfaces front-end responsivas e interativas usando HTML, PHP, CSS e JavaScript.</p>
                            <p>Colaboração com a equipe de design e back-end para implementar as especificações visuais e funcionais do projeto.</p>
                            <p>Otimização de desempenho e compatibilidade com diferentes navegadores.</p>
                        </div>
                        <div className="col-sm-12 content-left">
                            <h2>Experiência</h2>
                            <h3>Suporte técnico</h3>
                            <h4>UOL</h4>
                            <span>Maio 2013 - Atual - 1 ano</span>
                            <p>Prestação de suporte técnico a clientes via chat, e-mail e telefone, resolvendo dúvidas e problemas relacionados à hospedagem de sites e serviços relacionados.</p>
                            <p>Identificação e resolução de questões técnicas, como problemas de DNS, e-mails, FTP, SSL e outros aspectos da hospedagem</p>
                            <p>Configuração e gerenciamento de contas de hospedagem, domínios e bancos de dados.</p>
                            <p>Acompanhamento proativo de tickets de suporte e garantia de atendimento dentro dos SLAs estabelecidos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 content-right dados">
                    <p><MdAlternateEmail /> edilsoncicero_@hotmail.com</p>
                    <p><FaWhatsapp />  11 99168-0375</p>
                    <RedesSociais />
                    <Followersgit />
                    <strong>Educação:</strong>
                    <p>Tecnólogo em Análise e Desenvolvimento de Sistemas – Braz cubas – 2023</p>
                    <strong>Habilidades Técnicas:</strong>
                    <p>Linguagens: HTML5, CSS3, JavaScript (ES6+)</p>
                    <p>Frameworks: React, Angular, Vue.js</p>
                    <p>Pré-processadores CSS: Sass, Less</p>
                    <p>Ferramentas de versionamento: Git, GitHub</p>
                    <p>Gerenciamento de Pacotes: npm, Yarn</p>
                    <p>Design Responsivo</p>
                    <p>Conhecimentos básicos em UX/UI</p>
                    <strong>Idiomas:</strong>
                    <p>Inglês (avançado)</p>
                </div>
            </div>
        </div>
    );
}

export function OffCanvasRedesSociais({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow} className="me-2 btn-contato">
            Entre em contato.
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sobre mim</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>
                DevOps Fullstack com ampla experiência na criação de interfaces interativas e responsivas. Estou comprometido em utilizar meu conhecimento e conjunto de habilidades para aprimorar a experiência do usuário e a usabilidade de aplicações web. Meu objetivo é integrar perfeitamente o desenvolvimento e operações, otimizando processos e garantindo que os sistemas sejam eficientes, confiáveis e de alto desempenho.
                </p>
                <Menu/>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export function RedesSociais() {
    return (
        <>
        {['end'].map((placement, idx) => (
            <OffCanvasRedesSociais key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}