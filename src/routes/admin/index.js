import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import GoogleScholarScraper from '/routes/google-scholar-scraper';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const correctPassword = 'adminpass123'; // In a real app, this should be securely stored

    useEffect(() => {
        // Check if user is already authenticated
        const auth = localStorage.getItem('adminAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuth', 'true');
        } else {
            alert('Incorrect password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuth');
    };

    if (!isAuthenticated) {
        return (
            <div class={style.admin}>
                <h1>Admin Login</h1>
                <form onSubmit={handleLogin} class={style.loginForm}>
                    <input
                        type="password"
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div class={style.admin}>
            <h1>Admin Panel</h1>
            <button onClick={handleLogout} class={style.logoutButton}>Logout</button>
            <GoogleScholarScraper />
        </div>
    );
};

export default Admin;





