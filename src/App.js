import './App.css';

import NavBar from './app/components/NavBar/NavBar';
import Hero from './app/components/Hero/Hero';
import About from './app/components/About/About';
import Services from './app/components/ServiceFolder/Services';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
    </div>
  );
}

export default App;
