import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/About.module.css'
import Hero from "/components/Hero";
import Menu from "/components/Menu";
import {IoMdPlay} from "react-icons/io";
import {MdPause} from "react-icons/md";
import React from 'react';
import Footer from "/components/Footer";
import { connect } from 'react-redux';
import Header from '../../components/Header';
function About({menu,setMenu}) {
React.useEffect(()=>{
    setMenu(false)
},[])





  return (
    <div className={styles.about}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header theme="dark" position={'sticky'}/>

    <section className={`${styles.about_section_first}  lg:h-[100vh] relative sm:px-16 lg:py-32 lg:mt-12 flex-col flex items-center`}>

        <img src="/assets/about-1.png" alt="" className='sm:w-full lg:w-auto lg:absolute lg:left-0 lg:top-10'/>
        <div className={`lg:absolute  ${styles.about_hero_content} px-6`}>
            <h4>Learn About Our Special Approach</h4>
            <p>Our process is collaborative and iterative. With every new project, we take the time to listen to the needs of our partners in order to build a body of work from first principles. We divide the work into three phases, in which the head and the hand are always present: understanding, thinking and making. In every phase we present developments for review and feedback before progressing on to the next.

A selection of our clients are Aller Media, Björkholmen Gallery, Bonnier, Breakit, Coop, Erik Penser Bank, Galleri Magnus Karlsson, Max, Neuro, Swedish Committee for Afghanistan, Unesco and Unicef.</p>
<button className=' flex  gap-8 mt-5 justify-between items-center'>Contact <img src="/assets/arrow.svg" alt="" /></button>
        </div>
        <img src="/assets/about-2.png" alt="" className='lg:absolute lg:right-10 lg:-bottom-10'/>
    </section>

    <section className="large_section  text-white bg-black pt-64 pb-32">

        <div className="section_large_image w-full flex items-center justify-center"><img src="/assets/service.png" alt="" /></div>

        <div className="service_section flex lg:flex-row flex-col items-start gap-32 mt-12 px-8 lg:px-32 py-32">
            <h3 className='text-2xl'>Services</h3>
            <div className="services grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col py-4 px-8 hover:bg-gray-700 rounded-md">
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> <div className='col py-4 px-8 hover:bg-gray-700 rounded-md'>
                    <h3 className='text-5xl mb-2'>Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>

 <Menu/>
      <Footer/>

      
    </div>
  )
}

const mapStateToProps = state => ({
  menu:state.appReducer.menu
})

const mapDispatchToProps = dispatch => ({
    setMenu: (menu) => dispatch({ type: 'SET_MENU', menu })
})
export default connect(mapStateToProps,mapDispatchToProps)(About);