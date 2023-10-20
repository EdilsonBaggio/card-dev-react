// import logo from './logo.svg';
import './App.css';
import { Posts, WhatsApp, Usergit } from './components/Scripts';

function App() {
  return (
    <div className='container p-0'>
        <div className="base-perfil">
            <div>
                <Usergit />
            </div>
            <WhatsApp />
        </div>
        <div className='row'>
          <Posts />
        </div>
    </div>
  );
}

export default App;
