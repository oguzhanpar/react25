import React from 'react'

const siderLogoStyle = {
    textAlign: 'left',
    lineHeight: '50px',
    color: 'gray',
    fontSize: '30px',
    paddingLeft:'30px'
  };

function SideLogo() {
  return (
    <div style={siderLogoStyle}>
        <a href="/">
        LOGO
        </a>
        </div>
  )
}

export default SideLogo