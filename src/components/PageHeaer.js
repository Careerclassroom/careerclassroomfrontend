import React from 'react'

function PageHeaer({heading,backgroundimage}) {
    console.log(backgroundimage)
  return (
    <div className='pageheader-main'>
    <div className='pageheader-child' style={{backgroundImage: `url(${backgroundimage})`}} >
        <span className='pageheader-text'  >{heading}</span>
    </div>
</div>
  )
}

export default PageHeaer