import './App.css';
// import { Repos, WhatsApp, Usergit } from './components/Scripts';
import { Home } from './components/index.js';

function App() {
  return (
    // <div className='container p-0'>
    //     <div className="base-perfil">
    //         <div>
    //             <Usergit />
    //         </div>
    //         <WhatsApp />
    //     </div>
    //       <Repos />
    // </div>
    <div className='container-fluid content-home-top'>
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
