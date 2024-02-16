import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Layout/Navbar"
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Register from './components/Pages/Register';
import List from './components/Pages/List';
import Error from './components/Pages/Error';
import Edit from './components/Pages/Edit';
import Delete from './components/Pages/Delete';

function App() {
  return (
    <div className="App">
     <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/customer/update/:customerID" element={<Edit/>}></Route>
      <Route path="/customer/delete/:customerID" element={<Delete/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
