import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { auth, db } from '../config/firebaseConfig'; // Import auth and db from your Firebase config
import '../styles/MainApp.css'; // Import the new styles

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.authService = AuthService; // Initialize AuthService instance
    this.navigate = props.navigate;
    this.state = {
      userData: null, // State to hold the user data
    };
  }

  async componentDidMount() {
    // Fetch user data after the component mounts
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.setState({ userData: docSnap.data() });
      } else {
        console.log('No such document!');
      }
    }
  }

  handleLogout = async () => {
    try {
      await this.authService.logout();
      this.navigate('/signin'); // Redirect to signin page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="main-app-container">
        <div className="main-app-content">
          
          {userData ? (
            <div>
                <h1>Welcome {userData.username}</h1>
              <p>Email: {userData.email}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
          <button onClick={this.handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    );
  }
}

// Wrapping the MainApp in a higher-order component to inject the navigate prop
const MainAppWithNavigation = (props) => {
  const navigate = useNavigate();
  return <MainApp {...props} navigate={navigate} />;
};

export default MainAppWithNavigation;