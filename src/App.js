import './App.css';
import ModelSelector from './ModelSelector';
import Plots from './Plots';
import {useState, useEffect} from 'react';
import axios from 'axios';

const URL_API = 'http://127.0.0.1:8037/get_topics_sentiment';

function App() {
  const [model, setModel] = useState('Section1'); // Default model
  const [fetchedData, setFetchedData] = useState(null); // Data fetched from server

  useEffect(() => {
    const fetchDataOnce = async () => {
      const response = await axios.get(URL_API, {params: { freq: '1y' }});
      setFetchedData(response.data); // Now we have all the data for all the models
    };

    fetchDataOnce();
  }, []); 
  
  return fetchedData ? (
    <><div className="App-title">
      <h1>SEC Filings: Topics and sentiment</h1>
    </div>
    <div className="App">
    <ModelSelector model={model} setModel={setModel}/>
      <header className="App-header">
        <Plots dataForPlot={fetchedData[model]} model={model}/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div></> ) : <div>Loading...</div> 
}

export default App;
