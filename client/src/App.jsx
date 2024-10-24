import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the import based on your file structure
import Footer from './components/Footer'; // Adjust the import based on your file structure
import Homepage from './components/Homepage'; // Adjust the import based on your file structure
import Chat from './components/Chat'; // Adjust the import based on your file structure
import './App.css'
const App = () => {
    return (
        <Router>
            <Navbar /> {/* Place Navbar outside of Routes */}
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
            <Footer /> {/* Place Footer outside of Routes */}
        </Router>
    );
};

export default App;
