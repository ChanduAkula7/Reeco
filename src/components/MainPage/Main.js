import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
// import Button from 'react-bootstrap/Button';
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './Main.css'
import { listData } from '../../Data/list';
import Table1 from '../Table1/Table1';

const Main = () => {
  return (
    <div className='Main-page'>
        <div className='Top'>
            <div className='Suppiler q'>
            <p className='head'>Suppiler</p>
            <p>East cost friuts and vegetables</p>
            </div>
            <div className='Shipping-time q'>
            <p className='head'>Shipping time</p>
            <p>Thu,Feb 20</p>
            </div>
            <div className='Total q'>
            <p className='head'>Total</p>
            <p>$ 52,00</p>
            </div>
            <div className='Category q'>
            <p className='head'>Category</p>
            <p>East cost friuts and vegetables</p>
            </div>
            <div className='Department q'>
            <p className='head'>Department</p>
            <p>800-49328-392</p>
            </div>
            <div className='Status in-active  '>
            <p className='head'>Status</p>
            <p>Awaiting your approval</p>
            </div> 
        </div>
        <div className='lists'>
        <div className='list-top'>
            <div className='search-bar'>
                <input type="search" autoComplete='off' placeholder='Search...'  className='input1'/>
                <CiSearch className='search-icon'/>
            </div>
            <div className='side-search'>
                <button className='btn-add'>Add Item</button>
                <h5><FiPrinter  className='print-icon'/></h5>
            </div>

        </div>
        <div className='table11'>
        <Table1/>
        </div>
       
        </div>
      
    </div>
  )
}

export default Main
