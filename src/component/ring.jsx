

import React, { useRef } from 'react'
import * as THREE from 'three'
import {  useLoader } from 'react-three-fiber'
import img from '../texture/brick.png'

function Ring(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
    

  const texture = useLoader(THREE.TextureLoader, img)
  
  

  return (
    <mesh
      {...props}
      ref={mesh}
      position={[0, 0.5 , 0]}
      castShadow
      rotation={[ -Math.PI / 2, 0 , 0]} 
      >
      <torusBufferGeometry attach="geometry" castShadow recieveshadow />
      <meshStandardMaterial metalness={0.5} attach="material" map={texture} />
    </mesh>
  )
}
export default Ring; 
