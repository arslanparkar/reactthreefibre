

import React, { useRef } from 'react'

function Plane(props) {
  const mesh = useRef()
  


 

  return (
    <mesh {...props} ref={mesh} position={[0,-0.2,0]} rotation={[ -Math.PI / 2, 0 , 0]} receiveShadow >
      <planeBufferGeometry attach="geometry" args={[10, 10, 10]} receiveShadow/>
      <meshStandardMaterial  attach="material" color="lightblue" />
    </mesh>
  )
}
export default Plane; 
