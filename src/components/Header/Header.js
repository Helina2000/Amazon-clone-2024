import React, { useContext } from 'react'
import classes from './header.module.css'
import flag from '../../assets/img/640px-Flag_of_the_United_States.svg.png'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext)
  console.log(basket.length)
  
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  },0)

console.log(totalItem)

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
          </div>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <FaSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img src={flag} alt="flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BsCart3 size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;