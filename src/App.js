import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
import Addstudent from './Component/addstudent';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/student' element = {<Student/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path='/addstudent' element={<Addstudent/>}/>
 
      </Routes>
     
     </BrowserRouter>  
    </div>
  );
}

export default App;
