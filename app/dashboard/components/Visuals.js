import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";

// Model component with modelPath prop
function Model({ modelPath, rotation, scale, position, ...props }) {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      rotation={rotation}
      scale={scale}
      position={position}
      {...props}
    />
  );
}

const Visuals = ({ model }) => {
  // State for controlling rotation, scale, and position
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(0.01);
  const [position, setPosition] = useState([0, 0, 0]);

  return (
    <div className="flex flex-col items-center w-full h-[80vh] border border-gray-300 rounded-md mt-4 p-2">
      {/* Control Panel */}
      <div className="flex space-x-4 mb-4">
        <div>
          <label>Rotation X:</label>
          <input
            type="range"
            min={-Math.PI}
            max={Math.PI}
            step={0.01}
            value={rotation[0]}
            onChange={(e) =>
              setRotation([
                parseFloat(e.target.value),
                rotation[1],
                rotation[2],
              ])
            }
          />
        </div>
        <div>
          <label>Rotation Y:</label>
          <input
            type="range"
            min={-Math.PI}
            max={Math.PI}
            step={0.01}
            value={rotation[1]}
            onChange={(e) =>
              setRotation([
                rotation[0],
                parseFloat(e.target.value),
                rotation[2],
              ])
            }
          />
        </div>
        <div>
          <label>Scale:</label>
          <input
            type="range"
            min={0.01}
            max={1}
            step={0.01}
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Position Z:</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.1}
            value={position[2]}
            onChange={(e) =>
              setPosition([
                position[0],
                position[1],
                parseFloat(e.target.value),
              ])
            }
          />
        </div>
      </div>

      <div className="w-4/5 h-4/5">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={["#101010"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <OrbitControls
              enableZoom={true} // Enable zoom with the mouse scroll
              zoomSpeed={0.2} // Control the zoom speed
              maxDistance={10} // Maximum distance for zoom out
              minDistance={1} // Minimum distance for zoom in
              enablePan={true}
              autoRotate={false}
            />
            <Stage environment="sunset">
              {/* Pass the controls to the Model component */}
              <Model
                modelPath={model}
                rotation={rotation}
                scale={scale}
                position={position}
              />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
};

export default Visuals;
