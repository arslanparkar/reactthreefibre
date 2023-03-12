

import React, { useRef } from 'react'
import * as THREE from 'three'
import {  useLoader } from 'react-three-fiber'
import img from '../texture/bricks.jpeg'

function Cone(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
    

  const texture = useLoader(THREE.TextureLoader, img)
  
  

  return (
    <mesh
      {...props}
      ref={mesh}
      position={[0, 2.5, 0]}
      castShadow
      >
      <coneBufferGeometry attach="geometry" />
      <meshStandardMaterial metalness={0.5} attach="material" map={texture} />
    </mesh>
  )
}
export default Cone; 
