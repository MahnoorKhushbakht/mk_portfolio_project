import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Background from './components/Background';
import Projects from './components/Projects';
import ClientReviews from './components/ClientReviews';
import ScrollButton from './components/ScrollButton'
import Skills from './components/Skills'

function App() {
  return (
      <div className="App" style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'column' }}>
        <Header/>
        <Home/>
        <Background/>
        <Skills/>
        <Projects/>
<ClientReviews/>
        <Contact/>
        <AboutMe/>
        <ScrollButton/>
      </div>

  );
}

export default App;
