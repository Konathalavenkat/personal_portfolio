import { HashRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from'./components/header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import ParticlesBg from 'particles-bg'
import About from './components/About/About';
import Project from './components/Projects/Project';
import './style.css';
function App() {
  const particleJsConfig = {
    color: "#ffffff",
    type: "cobweb",
    bg: true,
    num: 100,
  };

  return (
    <div className="App min-vh-100" style={{ height: '100%', position: 'relative' }}>
      <ParticlesBg {...particleJsConfig} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />

      <Header/>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />}/>
          <Route path='/Projects' element={<Project/>}/>
        </Routes>
      </HashRouter>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%'}} />
    </div>
  );
}

export default App;
