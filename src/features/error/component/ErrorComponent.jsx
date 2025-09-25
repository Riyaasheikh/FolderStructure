import React from 'react'
import Buttons from '../../../components/global/Buttons'
import p1 from '../../../assets/asset/p1.jpeg'

const ErrorComponent = () => {
  return (
    <div className= "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img src={p1} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dicta soluta ratione quas culpa molestias illum officiis illo quaerat sed laudantium aut voluptatem amet, ipsum reprehenderit nihil optio cum repellendus.</p>
        <Buttons/>
    </div>
  )
}

export default ErrorComponent