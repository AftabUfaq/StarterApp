import React, {useState} from 'react'
import { country_data, state_data } from '../data/data';
import FormModal from './FormModal'

function AddCompnayModal() {
    const [countrys, setcountrys] = useState(country_data);
    const [states, setstates] = useState(state_data);
  return (
   <FormModal isVisible={true} title={"Add Company"}>

   </FormModal>
  )
}

export default AddCompnayModal