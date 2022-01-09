import './App.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import FriendsMenu from './components/FriendsMenu/FriendsMenu';
import ChatContainer from './components/Chat/ChatContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
    return (
        <Router>
                <div className="appWrapper">
                    <Navbar />
                    <FriendsMenu />
                    <ChatContainer/>
                    <ProfileContainer/>
                </div>
        </Router>
    );
}

export default App;
