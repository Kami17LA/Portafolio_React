import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index_la';
import Home from './components/Home/index_ho'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
