import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import { MdAlternateEmail } from "react-icons/md";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import brasil from "../locales/brasil.png"
import estadosunidos from "../locales/estados-unidos.png"


export function Link({ href, children }) {
    return (
        <li>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </li>
    )
}

export function Menu() {
    return (
        <div>
            <ul className="menu">
                <Link href="https://www.linkedin.com/in/edilsoncicero"><FaLinkedin /></Link>
                <Link href="https://github.com/EdilsonBaggio"><FaGithub /></Link>
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
                    <LanguageSwitcher />
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
    const { t } = useTranslation();

    const experiences = t('experiences', { returnObjects: true });

    // Verifique se experiences é um array
    if (!Array.isArray(experiences)) {
        console.error("Experiences is not an array:", experiences);
        return <p>Experiências não disponíveis</p>;
    }

    return (
        <div className="content-home">
            <div className="content-titulo">
               <Usergit />
            </div>
            <div className="row">
                <div className="col-sm-9 curriculo">
                    {experiences.map((experience, index) => (
                        <div key={index} className="col-sm-12 content-left">
                            <h3>{experience.title}</h3>
                            <h4>{experience.company}</h4>
                            <span>{experience.period}</span>
                            {experience.responsibilities.map((responsibility, i) => (
                                <p key={i}>{responsibility}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="col-sm-3 content-right dados">
                    <p><MdAlternateEmail /> edilsoncicero_@hotmail.com</p>
                    <p><FaWhatsapp />  11 99168-0375</p>
                    <Sobre />
                    <Followersgit />
                    <strong>Educação:</strong>
                    <p>Tecnólogo em Análise e Desenvolvimento de Sistemas – Braz Cubas – 2023</p>
                    <strong>Habilidades Técnicas:</strong>
                    <p>Linguagens: HTML5, CSS3, JavaScript (ES6+) e PHP</p>
                    <p>Frameworks: Bootstrap, React Bootstrap, React, Vue.js e Laravel</p>
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


export function OffCanvasSobre({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation();

    return (
        <>
        <Button variant="primary" onClick={handleShow} className="me-2 btn-contato">
            {t('sobremim')}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t('sobremim')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>
                {t('textAbout')}
                </p>
                <Menu/>
                <Form />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export function Sobre() {
    return (
        <>
        {['end'].map((placement, idx) => (
            <OffCanvasSobre key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}

export function Form({ action }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const { nome, email, mensagem } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            axios.post('http://localhost:5000/', formData, config).then((response) => {
                console.log('Resposta do servidor:', response.data);
            })
            .catch((error) => {
                console.error('Ocorreu um erro ao enviar os dados:', error);
            });
        }
    };

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nomeInput" className="form-label">Nome</label>
                    <input name="nome" type="text" className="form-control" id="nomeInput" value={nome} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" id="emailInput" value={email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensagemTextarea" className="form-label">Mensagem</label>
                    <textarea name="mensagem" className="form-control" rows={4} cols={40} id="mensagemTextarea" value={mensagem} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='languages'>
        <button onClick={() => changeLanguage('pt')}><img width={30} src={brasil} alt="" /></button>
        <button onClick={() => changeLanguage('en')}><img width={30} src={estadosunidos} alt="" /></button>
        </div>
    );
}