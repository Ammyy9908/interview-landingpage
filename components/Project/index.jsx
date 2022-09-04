import React from 'react'
import styles from "./index.module.css"
function Project({product_image,title,brand,description}) {
  return (
    <div className={`${styles.project} relative`}>
        <img src={product_image} alt={title} className="absolute top-0 w-full h-full object-cover"/>
        <div className={`${styles.product_info_container} absolute z-5 text-white`}>
            <h1 className='text-6xl'>Project Title</h1>
            <div className="product_footer block md:flex items-start  mt-12 ">
                <div className="product_brand_info">
                    <p>01</p>
                    <p>Rebook</p>
                </div>
                <p className="product_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <button>
                    <span>View project</span>
                    <img src="/assets/arrow_white.svg" alt="arrow-icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Project