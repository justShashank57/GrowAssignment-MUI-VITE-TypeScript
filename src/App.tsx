import './App.css';
import SignUp from './pages/Page1';
import API from './pages/Page2';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
         <Router>
            <Routes>
              <Route  path='/' element={<SignUp/>}/>
              <Route path='/page2' element={<API/>}/>
            </Routes>
         </Router>
         
    </>
  )
}

export default App
