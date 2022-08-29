import React from 'react'
import Button from 'react-bootstrap/Button';

const index = () => {
  return (
    <div style={{ backgroundImage: `url('/images/travedoc-header-edit.jpg')`, height: '100vh', backgroundSize: 'cover' }}>
      <div className='d-flex flex-column justify-content-center h-100 w-50 p-5'>
        <h1 className='font-bold align-items-center text-left px-5' style={{ fontSize: '4rem', color: '#41293f' }}><b style={{ color: '#e2d4a3' }}>Plan and Capture</b> Your Travel Moments <b style={{ color: '#e2d4a3' }}>Properly</b></h1>
        <p className='px-5 py-2 fs-5' style={{ color: '#41293f' }}>We believe every moment of your trip is precious, let&apos;s plan and capture those moments with us</p>
        <Button className='w-25 m-5 fs-5 py-3' style={{ background: '#e2d4a3', color: '#41293f', border: 'none' }}>Explore</Button>
      </div>
    </div>
  )
}

export default index
