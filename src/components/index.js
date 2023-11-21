import React from "react";
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

export function ConteudoHome() {
    return (
        <div className="content-home">
            <div className="content-titulo">
                <h1>Rahadiansyah</h1>
                <p><span>Designing</span>with purpose and precision</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    teste
                </div>
                <div className="col-md-3">
                    teste
                </div>
                <div className="col-md-3">
                    teste
                </div>
                <div className="col-md-3">
                    teste
                </div>
            </div>
        </div>
    );
}