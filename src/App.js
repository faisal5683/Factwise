import { useState } from 'react';
import Search from './components/Search/Search';
import List from './components/List/List';
import data from "./celebrities.json"
import './App.css';

function App() {
  const [fulldata, setfulldata] = useState(data);
  const [listData, setListData] = useState(fulldata); // For filering the data

  return (
    <div className="App">
      <Search setListData={setListData} fulldata={fulldata} />
      <List listData={listData} fulldata={fulldata} setfulldata={setfulldata} setListData={setListData} />
    </div>
  );
}

export default App;
