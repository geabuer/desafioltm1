
import './App.css';
import Autos from './Autos.jsx';    
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header>Galería de Imágenes con React</Header>
      <Autos imagen="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" Marca="Chevrolet" Modelo="spark"></Autos>
      <Autos imagen="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" Marca="Chevrolet" Modelo="spark"></Autos>
      <Autos imagen="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" Marca="Chevrolet" Modelo="spark"></Autos>
      <Footer>Pie de pagina</Footer>
    </div>
  );
}

export default App;
