import React, { memo } from 'react'
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <div className='flex items-center justify-center py-4'>
            <img className='w-44' src={logo} />
        </div>
    )
}

export default memo(Header)
