import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import image from '../../../../assets/asset/p2.jpeg'
import image1 from '../../../../assets/asset/p3.jpeg'
import image2 from '../../../../assets/asset/p4.jpeg'
const Productsblog = () => {
  return (
    <div>
        <div>
            <SectionHeading title={'All-in-One Features for your Productivity'} subtitle={'lorem lorem lorem'}/>
        </div>
        <div>
            <div className='ax-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, possimus saepe iste velit nobis amet excepturi aut consequuntur nostrum ab cupiditate eaque et blanditiis itaque ea vero. Inventore, mollitia id.</p>
            </div>
            <div className='ax-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <img src={image1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, possimus saepe iste velit nobis amet excepturi aut consequuntur nostrum ab cupiditate eaque et blanditiis itaque ea vero. Inventore, mollitia id.</p>
            </div>
            <div className='ax-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <img src={image2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, possimus saepe iste velit nobis amet excepturi aut consequuntur nostrum ab cupiditate eaque et blanditiis itaque ea vero. Inventore, mollitia id.</p>
            </div>
        </div>
    </div>
  )
}

export default Productsblog