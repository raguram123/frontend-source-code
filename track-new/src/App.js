

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Portal from './components/dashboard/Portal';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import BookView from './components/products/ProductView';
import EditBooks from './components/products/EditProducts';
import Book from './components/products/Product';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import { UserProvider } from './components/Context/UserContext';
import { LoginProvider } from './components/Context/LoginContext';
import AddBook from './components/products/AddProduct';


function App() {
  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route   path = "/signup" element = { < Signup/>}></Route>
          <Route path='/portal/' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='book' element={<Book />} />
            <Route path='addbook' element={<AddBook />} />
            <Route path='bookview/:id' element={<BookView />} />
            <Route path='editbook/:id' element={<EditBooks />} />
          </Route>
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default App;

