import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import { MdAlternateEmail } from "react-icons/md";
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
                    <div className="follow d-grid mt-3 mb-3">
                        <h4>GitHub</h4>
                        <p className='mb-3'>{userData.location}</p>
                        <span>Portfólio</span>
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
                    <strong>{t('educacao')}</strong>
                    <p>{t('curso')}</p>
                    <strong>{t('habilidade')}</strong>
                    <p>Linguagens: HTML5, CSS3, JavaScript (ES6+) e PHP</p>
                    <p>Frameworks: Bootstrap, React Bootstrap, React, Vue.js e Laravel</p>
                    <p>Pré-processadores CSS: Sass, Less</p>
                    <p>Ferramentas de versionamento: Git, GitHub</p>
                    <p>Gerenciamento de Pacotes: npm, Yarn</p>
                    <p>Design Responsivo</p>
                    <p>Conhecimentos básicos em UX/UI</p>
                    <strong>{t('idiomas')}</strong>
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
        telefone: '',
        mensagem: ''
    });

    const { nome, telefone, mensagem } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nome.trim() === '' || telefone.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            const whatsappLink = `https://api.whatsapp.com/send?phone=5511991680375&text=${encodeURIComponent(`Nome: ${nome}\nTelefone: ${telefone}\nMensagem: ${mensagem}`)}`;

            window.open(whatsappLink, '_blank');
        }
    };

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nomeInput" className="form-label">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        className="form-control"
                        id="nomeInput"
                        value={nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefoneInput" className="form-label">Telefone</label>
                    <input
                        name="telefone"
                        type="tel"
                        className="form-control"
                        id="telefoneInput"
                        value={telefone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensagemTextarea" className="form-label">Mensagem</label>
                    <textarea
                        name="mensagem"
                        className="form-control"
                        rows={4}
                        cols={40}
                        id="mensagemTextarea"
                        value={mensagem}
                        onChange={handleChange}
                    />
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
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    return (
        <div className='languages'>
            <button
                onClick={() => changeLanguage('pt')}
                style={{
                    border: selectedLanguage === 'pt' ? '4px solid black' : 'none',
                    color: 'white',
                    borderRadius: '100%',
                    padding: '0px',
                    backgroundColor: selectedLanguage === 'pt' ? 'black' : 'transparent',
                    height: '38px',
                    marginRight: '5px'
                }}
            >
                <img width={30} src={brasil} alt="Portuguese" />
            </button>
            <button
                onClick={() => changeLanguage('en')}
                style={{
                    border: selectedLanguage === 'en' ? '4px solid black' : 'none',
                    color: 'white',
                    borderRadius: '100%',
                    padding: '0px',
                    backgroundColor: selectedLanguage === 'en' ? 'black' : 'transparent',
                    height: '38px'
                }}
            >
                <img width={30} src={estadosunidos} alt="English" />
            </button>
        </div>
    );
}