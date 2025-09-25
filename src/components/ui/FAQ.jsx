import React from 'react'
import SectionHeading from '../global/SectionHeading'
import Buttons from '../global/Buttons'

const FAQ = () => {
  return (
    <div>
        <div className='left'>

        <SectionHeading title={'FAQS'} subtitle={'Frequent Asked Question'}/>
        <Buttons />
        </div>
        <div className="right">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti non aperiam facere adipisci. Rerum inventore atque quo quae culpa fugiat libero nesciunt necessitatibus. Accusamus quae ipsam impedit ab consequatur iure.</p>

            </div>

        </div>
    </div>
  )
}

export default FAQ