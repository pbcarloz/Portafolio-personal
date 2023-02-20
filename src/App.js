
import { useContext } from 'react';
import './App.css';
import About from './components/about/about-component';
import Contact from './components/contact/contact.component';
import Intro from './components/intro/intro-component';
import ProductList from './components/productList/product-list.component';
import Toggle from './components/toggle/toggle.component';
import { ThemeContext } from './context';



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
