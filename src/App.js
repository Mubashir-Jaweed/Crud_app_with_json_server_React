import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/add-user' element={<AddUser/>}/>
      </Routes>
      <Routes>
        <Route exact path='/' element={<AllUser/>}/>
      </Routes>
      <Routes>
        <Route exact path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
