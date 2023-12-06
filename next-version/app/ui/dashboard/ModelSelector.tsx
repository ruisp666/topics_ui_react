import React, {useState} from "react";
import { toast } from 'react-toastify';
import Select from "react-select";  // Import OptionTypeBase
import {Tooltip} from '@chakra-ui/react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import 'react-toastify/dist/ReactToastify.css';

const modelDescriptions: {[key: string]: string} = {
  Section1: 'Business Description',
  Section1A: 'Main Risks',
  Section7: 'Management Discussions',
   // add as many models as you need
 };

 const sectionsDescriptions: { [key: string]: string } = {
  Section1: `Description of the company’s business, including its main 
     products and services, what subsidiaries it owns, and what markets it operates 
     in. This section may also include information about recent events, competition 
     the company faces, regulations that apply to it, labor issues, special operating 
     costs, or seasonal factors.`,
  Section1A: `Includes information about the most significant risks that apply 
      to the company or to its securities. Companies generally list the risk factors 
      in order of their importance. In practice, this section focuses on the risks 
      themselves, not how the company addresses those risks. Some risks may be true 
      for the entire economy, some may apply only to the company’s industry sector 
      or geographic region, and some may be unique to the company.`,
  Section7: `Gives the company’s perspective on the business results of the past 
      financial year. This section, known as the MD&A for short, allows company 
      management to tell its story in its own words.`
};

 interface ModelSelectorProp {
  model: string;
  setModel: (model: string) => void;
}

export default function ModelSelector({ model, setModel }: ModelSelectorProp) {
    const [description, setDescription] = useState(sectionsDescriptions['Section1']);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const options  = Object.keys(modelDescriptions).map(key => ({ value: key, label: modelDescriptions[key] }));

    const handleChange = (selectedOption : any) => {
        setModel(selectedOption.value);

        const modelDescription = sectionsDescriptions[selectedOption.value as keyof typeof sectionsDescriptions];
        setDescription(modelDescription ? modelDescription : '');
        toast.success(`Selected model trained on ${modelDescriptions[selectedOption.value]}  (${selectedOption.value} of the 10K)`);
    };
    //Build the box        
    const modalBody = (
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw', bgcolor: 'rgba(255,255,255,1)', border: 'rounded-xl 2px solid #000',
        boxShadow: 24, p: 4, overflow: 'scroll', borderRadius: '24pt'
      }}>
        {description}
      </Box>
    );
      

    return (
      <div>
          <label htmlFor="models" > Choose a model: </label>
          <Select  
            className="rounded-xl w-64"
            name="models"
            value={options.find(option => option.value === model)} onChange={handleChange}
            options={options}
            placeholder="Select a model"
            />
            <button type="button" onClick={handleOpen}>
          Open Model Description
        </button>
        <Modal
          open={open}
          onClose={handleClose}
        >
       {modalBody}
        </Modal>
          <Tooltip label={description} fontSize="md" placement="bottom" width='200px' whiteSpace='normal'>
            <p className="text-left text-xl font-semibold text-emph text-gray-800">Hover for a description</p>
          </Tooltip>
        </div>
      );
} 
    

