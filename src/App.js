
import './App.css';
import About from './components/about/about-component';
import Contact from './components/contact/contact.component';
import Intro from './components/intro/intro-component';
import ProductList from './components/productList/product-list.component';
import Toggle from './components/toggle/toggle.component';

function App() {
  return (
    <div className="App">
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
