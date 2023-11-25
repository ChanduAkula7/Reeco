import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { listData } from '../../Data/list';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";
import './Table1.css'





const Table1 = () => {

const [rstat,setRstat]=useState(false);
const [gstat,setGstat]=useState(false);

// console.log(stat);

const change=(i)=>{
  console.log("hello");
  console.log(i);
}

const handleClickcross = (i) => {
  setRstat(!rstat);
};

const handleClickdone = (i) => {
 setGstat(!gstat);

};



  return (
    <div>
      <Table variant="none" className='tab'>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {listData.map(i=>{
          return(
            <>
            <tr className='roww' key={i.id}>
              <td><img src={i.image} alt="im" className='im1'/></td>
              <td>{i.ProductName}</td>
              <td>{i.Brand}</td>
              <td>{i.Price}</td>
              <td>{i.Quantity}</td>
              <td>{i.Total}</td>
              <div className='special1'>
              <td className='special'>
                <div>
                  <p className={rstat?'show-textgreen':'show-textred'}>{rstat?'Missing-urgent':''}{gstat?'approved':''}</p>
                  </div>
                <div className='sp'>
                
                <RxCross2 className={rstat?'':'show-textred'} onClick={() => handleClickcross(i)}/>
            
                
                <MdOutlineDone className={gstat?'show-textgreen':''} onClick={() => handleClickdone(i)} />
             
                    
                    <p>EDIT</p>
                </div>
                
              </td>
              </div>
            </tr>
            </>
          )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default Table1;
