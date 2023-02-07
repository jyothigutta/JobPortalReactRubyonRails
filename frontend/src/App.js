import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';

import {
 BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import SearchBook from './components/SearchBook';

function App() {
  return (
   
    <BrowserRouter>

    <Routes>
    <Route element={<ShowBook/>} path="/showbook"/>
    <Route element={<AddBook/>} path="/"/>
    <Route element={<SearchBook/>} path="/searchbook"/>
    </Routes> 
    </BrowserRouter>


  );
}

export default App;
