import "./App.css";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import Scene from "./component/scene";

function App() {
  return (
   
    
      <Canvas shadowMap
      camera={{ position: [-3, 2, 5], fov: 90 }}>
      <OrbitControls/>
      <Stars/>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.5}  castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}/>
      <Scene/>
    </Canvas>

        
   
  );
}

export default App;
