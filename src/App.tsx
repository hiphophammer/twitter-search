import './App.css';
import TopMenu from './components/topMenu';
import MainBody from './components/mainBody';
import BottomMenu from './components/bottomMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <MainBody />
      <BottomMenu />
    </div>
  );
}

export default App;
