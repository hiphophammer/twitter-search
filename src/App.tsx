import TopMenu from './components/topMenu';
import MainBody from './components/mainBody';
import BottomMenu from './components/bottomMenu';

import { LangProp } from './components/interfaces';
import { useState } from 'react';
import './App.module.css';

function App() {
  const [ lang, setLang ] = useState<string>( 'KR' );

  return (
    <div className="App">
      <TopMenu langObj={{lang, setLang}}/>
      <MainBody />
      <BottomMenu />
    </div>
  );
}

export default App;
