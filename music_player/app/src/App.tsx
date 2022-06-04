import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AddSong } from './modules/music_player/songs/AddSong';
import { SongsTable } from './modules/music_player/songs/Songs';
import { UsersPage } from './modules/music_player/user/components';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route path="/songs" exact component={SongsTable} />
          <Route path="/songs/add" exact component={AddSong} />
          <Route path="/" exact component={UsersPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
