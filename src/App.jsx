import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Perspective from './components/Perspective.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return <>
    <Header />
    <main><Hero /><Gallery /><Perspective /></main>
    <Footer />
  </>;
}
