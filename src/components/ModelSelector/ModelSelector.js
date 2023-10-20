import React, {useState} from "react";
import './ModelSelector.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const modelDescriptions = {
  Section1: 'Business Description',
  Section1A: 'Main Risks',
  Section7: 'Management Discussions',
   // add as many models as you need
 };


function ModelSelector({ model, setModel }) {
    const [description, setDescription] = useState('Description for Model 1');
    


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
          <p>{description}</p>
        </div>
      );
} 
    
 export default ModelSelector;
