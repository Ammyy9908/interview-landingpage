import React from 'react'
import styles from "./index.module.css"
import {FiMenu} from "react-icons/fi"
import { connect } from 'react-redux'
import Link from 'next/link'
function index({setMenu,theme,menu}) {
  return (
    <div className={`${styles.header} ${theme==="light"?"text-white":"text-black"}`}>
        <div className={`${styles.header__wrapper}`}>
            <Link href="/"><a  className='uppercase text-2xl'>Interview</a></Link>
            <button className='text-xl' onClick={()=>setMenu(!menu)}><FiMenu/></button>
        </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    setMenu: (menu) => dispatch({ type: 'SET_MENU', menu })
})



const mapStateToProps = state => ({
    menu:state.appReducer.menu
  })


export default connect(mapStateToProps,mapDispatchToProps)(index)