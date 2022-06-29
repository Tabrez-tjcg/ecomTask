import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home'
import MyDrawer from './Components/MyDrawer';

function App() {
  return (
    <div className="App">
      <MyDrawer>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='home' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </MyDrawer>
      <Footer />
    </div>
  );
}

export default App;
