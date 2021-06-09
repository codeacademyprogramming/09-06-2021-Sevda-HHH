import './App.css';
import { UsersPage } from './modules/music_player/user/components';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UsersPage />
    </div>
  );
}

export default App;
