import React from 'react'
import { connect } from 'react-redux'
import Header from "../Header"
import Footer from "../Footer"
import styles from "./index.module.css"
import Link from 'next/link'
function index({menu}) {
  return (
    <div className={`${styles.menu} ${menu && styles.menu_enable}`}>
        <Header theme="dark"/>
        <ul className="menu-links mt-32 mb-32 mx-auto flex flex-col  px-16">
            <li className='border-t-2 border-black py-5'><Link href="/about"><a  className='text-3xl lg:text-6xl font-bold'>About</a></Link></li>
            <li className='border-t-2 border-black py-5'><Link href="/projects"><a className='text-3xl lg:text-6xl font-bold'>Projects</a></Link></li>
            <li className='border-t-2 border-black py-5'><a href="#" className='text-3xl lg:text-6xl font-bold'>Clients</a></li>
            <li className='border-t-2  border-b-2 border-black py-5'><a href="#" className='text-3xl lg:text-6xl font-bold'>Contact</a></li>
        </ul>

        <Footer fixed={true}/>
      
    </div>
  )
}
const mapStateToProps = state => ({
    menu:state.appReducer.menu
  })
  export default connect(mapStateToProps,null)(index)