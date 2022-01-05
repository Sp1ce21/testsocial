import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import FriendsMenu from './components/FriendsMenu/FriendsMenu';

function App() {
    return (
        <Router>
                <div className="appWrapper">
                    <Navbar />
                    <FriendsMenu />
                </div>
        </Router>
    );
}

export default App;
