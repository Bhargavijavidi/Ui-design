import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function ResponsiveExample({handlePatientdata,handleShow,data}){
  const handlePatient=(id)=>{
    data.forEach((newItems)=>{
   if(newItems.id===id){
          handlePatientdata(newItems);    
   }
 })
 }
  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr className='tableheader'>
       <th className='rowone'>Patient Name</th>
        <th className='rowone'>Contact</th>  
         <th className='rowone'>Parent </th> 
         <th className='rowtwo'>Immediate Actions</th> 
          <th className='rowone'>Due Date</th>
          <th className='rowone'>Action</th>
        </tr>
      </thead>
         {
            data.map((eachItem)=>{
                const{id,name,contact,parent,immaction,dueDate}=eachItem;
             return<tbody key={id}>
            <tr className='tabledata'>  
             <td className='tablecolumn'>
              <button className='button1' onClick={()=>handlePatient(id)}>{name}</button>
              </td>
             <td className='tablecolumn'>{contact}</td>
             <td className='tablecolumn'>{parent}</td>
             <td>{immaction}</td>
             <td><p>{dueDate}</p>
             <p>{dueDate}</p>
             <p>{dueDate}</p>
             </td>
             <td className='column'>
            <button className='button' onClick={()=>handleShow("Follow-up","This patient needs a follow-up appointment for: [details of follow-up].")}>Follow-up</button><br/>
             <button className='button'  onClick={()=>handleShow("Vaccines","This patient needs to receive the following vaccines: [list of vaccines].")}>Vaccines</button><br/>
             <button className='button' onClick={() => handleShow("Lab Report","This patient needs the following lab tests: [list of lab].")}>Lab Tests</button>
             </td>
             </tr>
        </tbody>
            })
         }
        </Table>
        </div>
  );
}

export default ResponsiveExample;













