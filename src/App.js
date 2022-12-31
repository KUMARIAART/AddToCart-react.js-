import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import AddCart from './AddCart';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddCart' element={<AddCart />} />
      </Routes>
      </div>
  );
}
export default App;
