import React, {useState} from "react";
import './ModelSelector.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip';


function ModelSelector() {
    const [model, setModel] = useState('Model1');
    const [description, setDescription] = useState('Description for Model 1');
    
    const modelDescriptions = {
        Model1: 'Description for Model1',
        Model2: 'Description for Model2',
        Model3: 'Description for Model3',
        // add as many models as you need
      };


    const handleChange = (event) => {
        setModel(event.target.value);

        const modelDescription = modelDescriptions[event.target.value];
        setDescription(modelDescription ? modelDescription : '');
        toast.success(`Model selected: ${event.target.value}`);
    };

    return (
        <div className="dropdown">
            <Tooltip id="mi" />
          <label htmlFor="models">Choose a model: </label>
          <select name="models" id="models" value={model} onChange={handleChange}>
            <option value="Model1">Section 1</option>
            <option value="Model2">Section 1A</option>
            <option value="Model3" data-tooltip-content="Management Discussion" data-tooltip-id="Section7">Section 7</option>
          </select>
          <ToastContainer />
          <p>{description}</p>
        </div>
      );
} 
    
 export default ModelSelector;
