import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm 
        isRegister={true}
        title="Register"
      />
      <UserForm 
        title="Edit profile"
      />
    </div>
  );
}

export default App;
