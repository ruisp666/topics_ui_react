import React, {useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const modelDescriptions = {
  Section1: 'Business Description',
  Section1A: 'Main Risks',
  Section7: 'Management Discussions',
   // add as many models as you need
 };

 interface ModelSelectorProp {
  model: string;
  setModel: (model: string) => void;
}

export default function ModelSelector({ model, setModel }: ModelSelectorProp) {
    const [description, setDescription] = useState('Description for Model 1');
    


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(event.target.value);

        const modelDescription = modelDescriptions[event.target.value as keyof typeof modelDescriptions];
        setDescription(modelDescription ? modelDescription : '');
        toast.success(`Selected model: ${event.target.value}`);
    };

    return (
      <div>
          <label htmlFor="models" > Choose a model: </label>
         <div className="rounded-xl">
          <select name="models" className="rounded-xl"
           id="models" value={model} onChange={handleChange}>
            {Object.keys(modelDescriptions).map(key => (
          <option value={key} key={key}>{key}</option>
        ))}
          </select>
          </div>
        <p>{description}</p>
        </div>
      );
} 
    

