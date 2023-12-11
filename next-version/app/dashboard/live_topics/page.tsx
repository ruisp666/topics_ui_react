'use client';
import SearchBox from "@/app/ui/dashboard/Search";
import {useState, useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const URL_API_LIVE_TOPICS : string|undefined = process.env.NEXT_PUBLIC_API_URL_LIVE_TOPICS;

export default function Page() {
  

    const [fetchedData, setFetchedData] = useState(null); // Data fetched from server

    const onSearch = async (searchTerm: string) => {
      console.log(searchTerm);
      try {
        const response: AxiosResponse<any, any> = await axios.get(URL_API_LIVE_TOPICS|| '', { params: { freq: searchTerm }, headers: {
          'API-Key': process.env.NEXT_PUBLIC_GCP_BACKEND_API_KEY
      } }, );
        setFetchedData(response.data);
        console.log('Success!')
        console.log(response)
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
    };
  }
    return (
    <div>
      <SearchBox onSearch={onSearch}/>
      <p>pera</p>
    </div>
     );

};