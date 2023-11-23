import React, { useState, useEffect } from 'react';
import Logo from '../logo.svg';

export function Link({ href, children }) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    )
}

export function Menu() {
    return (
        <div className="topo">
            <img className="logo" src={Logo} alt="Minha Imagem" width='60'/>
            <ul className="menu">
                <Link href="/">Home</Link>
                <Link href="/">Portofolio</Link>
                <Link href="/">Contato</Link>
            </ul>
        </div>
    );
}

export function Home() {
    return (
        <div>
            <header>
                <Menu/>
                <ConteudoHome />
            </header>
        </div>
    );
}

export function Usergit() {
    const [userData, setUserData] = useState(null);
    const username = 'edilsonbaggio'; // Substitua pelo nome de usuário do GitHub desejado
    const user = {
        avatar_size: '160',
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
                    <div className="col-md-9">
                        <h1>{userData.name}</h1>
                        <p><span>DevOps</span>Fullstack</p>
                    </div>
                    <div className="col-md-3 text-center">
                    <img
                        className="user-avatar"
                        src={userData.avatar_url}
                        alt={`Imagem de perfil de ${userData.name}`}
                        width={userData.avatar_size}
                        height={user.avatar_size}
                    />
                    </div>
                </div>
                </div>
            ) : (
                <p>Carregando...</p>
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
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 content-left">
                            <h2>Experience</h2>
                            <h3>Senior UI/UX Product Designer</h3>
                            <h4>Enterprise name</h4>
                            <span>Aug 2018 - Present - 1 year, Paris</span>
                            <p>Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</p>
                        </div>
                        <div className="col-md-12 content-left">
                            <h2>Experience</h2>
                            <h3>Senior UI/UX Product Designer</h3>
                            <h4>Enterprise name</h4>
                            <span>Aug 2018 - Present - 1 year, Paris</span>
                            <p>Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</p>
                        </div>
                        <div className="col-md-12 content-left">
                            <h2>Experience</h2>
                            <h3>Senior UI/UX Product Designer</h3>
                            <h4>Enterprise name</h4>
                            <span>Aug 2018 - Present - 1 year, Paris</span>
                            <p>Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 content-right">
                    <p>yourmail@gmail.com</p>
                    <p>11 99168-0375</p>
                    <p>GitHub</p>
                </div>
            </div>
        </div>
    );
}