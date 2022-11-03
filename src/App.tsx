import TopMenu from './components/topMenu';
import MainBody from './components/mainBody';
import BottomMenu from './components/bottomMenu';

import './App.module.css';

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
