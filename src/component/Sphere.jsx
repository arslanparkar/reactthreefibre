

import React, { useRef } from 'react'
import * as THREE from 'three'
import {  useLoader } from 'react-three-fiber'
import img from '../texture/gloss.webp'

function Sphere(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
    

  const texture = useLoader(THREE.TextureLoader, img)
  
  

  return (
    <mesh
      {...props}
      ref={mesh}
      position={[0, 1.2, 0]}
      castShadow>
      <sphereBufferGeometry attach="geometry" castShadow recieveshadow/>
      <meshStandardMaterial metalness={0.5} attach="material" map={texture} />
    </mesh>
  )
}
export default Sphere; 
