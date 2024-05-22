
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Bottons from './components/Bottons';
import Listmap from './components/Listmap';
import Mapping from './components/Mapping';
import Apibasics from './components/Apibasics';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/s' element={<Statebasics/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/buttons' element={<Bottons/>}/>
        <Route path='/list' element={<Listmap/>}/>
        <Route path='/map' element={<Mapping/>}/>
        <Route path='/a' element={<Apibasics/>}/>
        <Route path='/card' element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default App;
