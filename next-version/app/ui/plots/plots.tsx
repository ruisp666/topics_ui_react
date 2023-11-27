import React ,{useState, useEffect} from 'react';
import './Plots.css';

import dynamic from "next/dynamic";

import PlotData  from 'react-plotly.js';

// Use Next.js dynamic imports as the library uses `window`
const Plot = dynamic(() => import("react-plotly.js") , {
  ssr: false, 
});

interface Item {
    Topic: number;
    Name: string;
    Timestamp: string;
    mean: string;
  }
  
  interface Prop {
    dataForPlot: string;
    model: string;
  }

  interface Trace extends PlotData {
    x: string[];
    y: string[];
    name: string;
    mode: "lines" | "markers" | "text" | "lines+markers" | "text+markers" | "text+lines" | "text+lines+markers" | "none" | "gauge" | "number" | "delta" | undefined;
    type: "scatter";
  }


export default function Plots({dataForPlot,model}: Prop ){
  const [data, setData] = useState<Trace[] | null>(null);;
  useEffect(() => {
    const items: Item[] = JSON.parse(dataForPlot);  
    console.log(items)
    const formattedData = items.filter((item) => item.Topic >= 0 && item.Topic < 15)
    .reduce((accumulator: Trace[], item: Item) => {
      let trace: any = accumulator.find((trace) => trace.name === item.Name);
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
 


