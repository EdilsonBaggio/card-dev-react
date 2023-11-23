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
                            <h3>Desenvolvedor Front-end</h3>
                            <h4>Afonso Carlos Sandríni</h4>
                            <span>Fevereiro 2021 - Atual - 6 anos</span>
                            <p>Desenvolvimento de interfaces front-end responsivas e interativas usando HTML, CSS e JavaScript.</p>
                            <p>Colaboração com a equipe de design e back-end para implementar as especificações visuais e funcionais do projeto.</p>
                            <p>Otimização de desempenho e compatibilidade com diferentes navegadores.</p>
                            <p>Participação em revisões de código e melhorias contínuas do projeto.</p>
                            <p>Integração de APIs e serviços web para garantir a comunicação eficiente com o back-end.</p>
                        </div>
                        <div className="col-sm-12 content-left">
                            <h2>Experience</h2>
                            <h3>Senior UI/UX Product Designer</h3>
                            <h4>Enterprise name</h4>
                            <span>Aug 2018 - Present - 1 year, Paris</span>
                            <p>Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 content-right dados">
                    <p><MdAlternateEmail /> edilsoncicero_@hotmail.com</p>
                    <p><FaWhatsapp />  11 99168-0375</p>
                    <RedesSociais />
                    <Followersgit />
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