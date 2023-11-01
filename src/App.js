// import logo from './logo.svg';
import './App.css';
import { Repos, WhatsApp, Usergit } from './components/Scripts';

function App() {
  return (
    <div className='container p-0'>
        <div className="base-perfil">
            <div>
                <Usergit />
            </div>
            <WhatsApp />
        </div>
          <Repos />
    </div>
  );
}

export default App;
