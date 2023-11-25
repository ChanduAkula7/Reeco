import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css'


const Navbar1 = () => {
  return (
    <>
    <navbar className='Nav'>
      <div className='menu-items t1'>
        <ul>Reeco</ul>
        <ul>Store</ul>
        <ul>Orders</ul>
        <ul>Analytics</ul>
    
      </div>
      <div className='menu-items t2'>
        <ul><AiOutlineShoppingCart/></ul>
  <div class="dropdown">
  <button class="dropdown-toggle t" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Hello,James 
  </button>
</div>
      </div>
    </navbar>


    </>
  )
}

export default Navbar1
