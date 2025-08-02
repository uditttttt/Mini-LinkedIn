import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import api from './services/api';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await api.get('/auth');
                    setUser(res.data);
                    setIsAuthenticated(true);
                } catch (err) {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                    setUser(null);
                }
            }
        };
        checkLoggedIn();
    }, []);

    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} user={user} />
            <main>
                <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/profile/:userId" element={<Profile currentUser={user} />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;