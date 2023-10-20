import React, {useState} from "react";
import './ModelSelector.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip';


function ModelSelector({ model, setModel }) {
    const [description, setDescription] = useState('Description for Model 1');
    
    const modelDescriptions = {
       Section1: 'Business Description',
       Section1A: 'Main Risks',
       Section7: 'Management Discussions',
        // add as many models as you need
      };


    const handleChange = (event) => {
        setModel(event.target.value);

        const modelDescription = modelDescriptions[event.target.value];
        setDescription(modelDescription ? modelDescription : '');
        toast.success(`Selected model: ${event.target.value}`);
    };

    return (
        <div className="dropdown">
          <label htmlFor="models">Choose a model: </label>
          <select name="models" id="models" value={model} onChange={handleChange}>
            <option value="Section1">Section 1</option>
            <option value="Section1A">Section 1A</option>
            <option value="Section7">Section 7</option>
          </select>
          <ToastContainer />
          <p>{description}</p>
        </div>
      );
} 
    
 export default ModelSelector;
