// import logo from './logo.svg';
import './App.css';

function Menu() {
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

function Link({ href, children }){
	return (
  		<li>
  		  <a href={href}>{children}</a>
  		</li>
  )
}

const user = {
	name: 'Edilson Santos',
  profile: 'DevOps Fullstack',
  imageUrl: './logo512.png',
  imageSize: '35',
};

const Experiencias = [
  { title: 'React', id: 1, value: 30 },
  { title: 'Sass', id: 2, value: 56 },
  { title: 'JavaScript', id: 3, value: 70 }
];

function SeparatorList() {
  return (
    <ul className="list_skins">
      {Experiencias.map(experiencia => (
        <li className="item_skin" key={experiencia.id} id={experiencia.id}>
          {experiencia.title} <br />
          <progress value={experiencia.value} max={100} />
        </li>
      ))}
    </ul>
  );
}

function Button() {
		return (
    		<a href="https://wa.me/5511991680375">
    		  <button className="btn-contato">Entrar em contato</button>
    		</a>
    );
}

function App() {
  return (
    <div>
        <div className="base-perfil">
            <div className="d-flex">
                <div>
                    <div className="perfil">
                      <img className="user-avatar"
                      src={user.imageUrl}
                      alt={'Foto do' + user.name}
                      width={user.imageSize}
                      height={user.imageSize}
                      />
                      <div>
                        <h1>{user.name}</h1>
                        <p>{user.profile}</p>
                      </div>
                    </div>
                    <Menu />
                </div>
                <SeparatorList />
            </div>
            <Button />
        </div>
    </div>
  );
}

export default App;
