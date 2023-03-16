import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const {progress} = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize:18,
        color: '#000',
        fontWeight: 800,
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader