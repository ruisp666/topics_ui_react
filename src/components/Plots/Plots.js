import React ,{useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import './Plots.css';


function Plots({dataForPlot,model}){
  const [data, setData] = useState(null);
  useEffect(() => {
    const items = JSON.parse(dataForPlot);  
    console.log(items)
    const formattedData = items.filter((item) => item.Topic >= 0 && item.Topic < 15)
    .reduce((accumulator, item) => {
      let trace = accumulator.find((trace) => trace.name === item.Name);
      if (!trace) {
        trace = {
          x: [],
          y: [],
          name: item.Name,
          type: 'scatter',
          mode: 'lines',
        };
        accumulator.push(trace);
      }
      trace.x.push(item.Timestamp);
      trace.y.push(item.mean);
      return accumulator;
    }, []);
    //console.log(data['Section1']);
      // TODO: process items into an array of traces for Plot component 
      setData(formattedData);
  },[dataForPlot]);
    
  return data ? (
    <div className="center-plot">
      <Plot
        data={data}
        layout={{
          width: 1200,
          height: 800,
          title: `Topic Sentiment over time ${model}`,
          xaxis: {
            title: 'Snapshot Date',
            tickfont: {
              color: '#61dafb',
            }
          },
          yaxis: {
            title: 'Average sentiment',
            tickfont: {
              color: '#61dafb',
            }
          },
          plot_bgcolor: '#25262a',
          paper_bgcolor: '#25262a',
          font: {
            color: '#61dafb',
          }
        }}
      />
    </div>
  ) : <div>Loading...</div>;
};
 

  export default Plots;

