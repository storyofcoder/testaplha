import React from 'react'
import Svg from '../StyledSystem/Svg'

const SvgComponent = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#F0AD2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8V12" stroke="#F0AD2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16H12.01" stroke="#F0AD2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default SvgComponent
