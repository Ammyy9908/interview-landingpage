import React from 'react'

function index({fixed}) {
  return (
    <footer className={`py-12 px-12 ${fixed && "absolute"} bottom-0`}>

        <div className="footer-content flex flex-col gap-8 lg:flex-row justify-between">
          <p>© 2021 - ITERVIEW / All Rights Reserved</p>
          <div className="footer-nav flex items-center gap-12">
            <span>Find us online</span>
            <ul className='flex items-center gap-3'>
              <li><a href="#" className='underline'>Instagram</a></li>
              <li><a href="#" className='underline'>Linkedin</a></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default index