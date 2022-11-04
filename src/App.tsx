import TopMenu from './components/topMenu';
import MainBody from './components/mainBody';
import BottomMenu from './components/bottomMenu';

import { LangProp } from './components/interfaces';
import { useState } from 'react';
import './App.module.css';

function App() {
  const [ langObj, setLangObj ] = useState( require( './components/locale/ko_kr.json' ) );

  return (
    <div className="App">
      <TopMenu langObj={{langObj, setLangObj}}/>
      <MainBody langObj={langObj}/>
      <BottomMenu />
    </div>
  );
}

export default App;
