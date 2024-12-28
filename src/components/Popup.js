import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ResponsiveExample from './Table';
import { patients } from './api.js';
function Popup(){
    const[data,setData]=useState(patients);
    const[patient,setPatient]=useState(false)
    const[show,setShow]=useState(false);
    const[model,setModel]=useState('');
    const[title,setTitle]=useState('')
    const [selectedPatient, setSelectedPatient] = useState(null);
    const handleClose=()=>{
        setPatient(false)
        setShow(false)
    }
const handlePatientdata=(patient)=>{
        setPatient(true);
        setSelectedPatient(patient);
        console.log(selectedPatient);
        }
 const handleShow=(title,content)=>{
     setTitle(title);
     setModel(content);
     setShow(true)
  }
 return<div>
     <ResponsiveExample handlePatientdata={handlePatientdata} handleShow={handleShow} data={data} />
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {model}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
        {patient === true && selectedPatient &&
         (<Modal show={patient} onHide={handleClose}>
             <Modal.Header closeButton>
            <Modal.Title>{selectedPatient.name}</Modal.Title> 
            </Modal.Header>
            <Modal.Body> <p>Contact:{selectedPatient.contact}</p>
            <p>Parent: {selectedPatient.parent}</p> 
            <p>Immediate Actions: {selectedPatient.immaction}</p>
            <p>Due Date: {selectedPatient.dueDate}</p> 
            </Modal.Body> <Modal.Footer> 
            <Button variant="secondary" onClick={handleClose}>Close</Button> </Modal.Footer> </Modal> )}

 </div>
}

export default Popup;



