
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Description from './pages/Description';
import Collections from './pages/Collections';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile/:name' element={<Profile/>}/>
      <Route path='/description/:id' element={<Description/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/collection/:foodName' element={<Collections/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
