import React, { useRef } from "react";
import {  useFrame } from "@react-three/fiber";
import Plane from "./plane";
import Box from "./cube";
import Sphere from "./Sphere";
import Ring from "./ring";
import Cone from "./cone";
const Scene = () => {
    const scene = useRef();
    useFrame(() => {
      
    });
    return (
      <group ref={scene}>
        <Plane/>
        <Box/>
        <Ring/>
        <Cone/>
        <Sphere/>
      </group>
    );
  };
export default Scene; 