import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
