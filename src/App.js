import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index_la';
import Home from './components/Home/index_ho'
import About from './components/About/index_ab';
import Contact from './components/Contact/index_co';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
