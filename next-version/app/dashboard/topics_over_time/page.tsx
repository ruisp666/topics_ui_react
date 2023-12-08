
'use client';
import ModelSelector from "@/app/ui/dashboard/ModelSelector";
import Plots from "@/app/ui/plots/plots";
import {useState, useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';




const URL_API: string|undefined = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  const [model, setModel] = useState('Section1'); // Default model
  const [fetchedData, setFetchedData] = useState(null); // Data fetched from server

  useEffect(() => {
    const fetchDataOnce = async () => {
      try {
        const response: AxiosResponse<any, any> = await axios.get(URL_API || '', { params: { freq: '1y' }, headers: {
          'API-Key': process.env.NEXT_PUBLIC_GCP_BACKEND_API_KEY
      } }, );
        setFetchedData(response.data);
      } catch (error : any) {
        if (error.response) {
          // The request was made and the server responded with status code out of the range of 2xx
          // Show a toast on error
          toast.error(`Error: ${error.response.status}, ${error.response.data.error}`);
        } else if (error.request) {
          // The request was made but no response was received
          // Likely case: service is not running or unreachable. Show a toast.
          toast.error("Service is not running or can't be reached. Please ensure that the service is running and try again.");
        } else {
          // Something else happened while setting up the request and triggered an error
          toast.error('An unexpected error occurred');
        }
      }
    };
    fetchDataOnce();
  }, []);
  
  return (
    <div className="App">
      <ToastContainer /> 
      {fetchedData ? (
    <>
    <div className="App-title">
      <h1>SEC Filings: Topics and sentiment</h1>
    </div>
    
    <ModelSelector model={model} setModel={setModel}/>
      <header className="App-header">
        <Plots dataForPlot={fetchedData[model]} model={model}/>
      </header>
    </>
    )  : (<div>Loading data...</div>
    )}
    </div>
  )
      }


