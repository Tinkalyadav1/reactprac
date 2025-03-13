import Bio from './Bio';
import './App.css';
import Profile from './Profile';
import Avatar from './Avatar';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Bio/>
      <Avatar
       height="300px"
       width="200px"
       person = {{name:"Tinkal"}} />
    </div>
  );
}
export default App;
