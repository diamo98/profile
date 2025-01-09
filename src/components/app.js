import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Research from '../routes/research';
import Publications from '../routes/publications';
import Teaching from '../routes/teaching';
import Contact from '../routes/contact';
import Admin from '../routes/admin';

const App = () => (
    <div id="app">
        <Header />
        <main>
            <Router>
                <Home path="/" />
                <Research path="/research" />
                <Publications path="/publications" />
                <Teaching path="/teaching" />
                <Contact path="/contact" />
                <Admin path="/adm" />
            </Router>
        </main>
    </div>
);

export default App;






