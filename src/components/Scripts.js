import React, { useState, useEffect } from 'react';

// Exporte a função como padrão, não como uma constante
export function Repos() {
    const [userData, setUserData] = useState(null);
    const username = 'edilsonbaggio'; // Substitua pelo nome de usuário do GitHub desejado

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
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
                <div className='row'>
                    {userData.map(repo => (
                        <div key={repo.id} className='col-md-4'>
                            <div className='content-card p-3'>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <a className='btn btn-link-repos' href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>   
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}


export function WhatsApp() {
    return (
        <a href="https://wa.me/5511991680375">
          <button className="btn-contato">Entrar em contato</button>
        </a>
    );
}

export function Link({ href, children }) {
    return (
            <li>
            <a href={href}>{children}</a>
            </li>
    )
}

export function Menu() {
    return (
        <ul className="menu">
            <Link href="/"><img src="./git-original.svg" width="30" height="30" alt=""/></Link>
            <Link href="/"><img src="./react-original.svg" width="30" height="30" alt=""/></Link>
            <Link href="/"><img src="./javascript-original.svg" width="30" height="30" alt=""/></Link>
            <Link href="/"><img src="./php-original.svg" width="30" height="30" alt=""/></Link>
            <Link href="/"><img src="./html5-original.svg" width="30" height="30" alt=""/></Link>
            <Link href="/"><img src="./sass-original.svg" width="30" height="30" alt=""/></Link>
        </ul>
    );
}

export function Usergit() {
    const [userData, setUserData] = useState(null);
    const username = 'edilsonbaggio'; // Substitua pelo nome de usuário do GitHub desejado
    const user = {
        avatar_size: '95',
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
            <div className="d-flex">
            <div className="perfil">
                <img
                className="user-avatar"
                src={userData.avatar_url}
                alt={`Imagem de perfil de ${userData.name}`}
                width={userData.avatar_size}
                height={user.avatar_size}
                />
                <div>
                <h1>{userData.name}</h1>
                <p>{userData.bio}</p>
                <p>{userData.location}</p>
                <a href={userData.blog}>edilsonsantos.website</a>
                </div>
            </div>
            <div>
                <Menu />
                <div className="follow">
                <span>Seguidores</span>
                <progress value={userData.followers} max={100} />
                <span>Seguindo</span>
                <progress value={userData.following} max={100} />
                </div>
            </div>
            </div>
        ) : (
            <p>Carregando...</p>
        )}
        </div>
    );
}