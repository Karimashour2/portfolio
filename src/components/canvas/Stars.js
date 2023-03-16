import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial } from "@react-three/drei";

const Stars = () => {
  return (
    <div className="canvas-container absolute inset-0 z-[-10]">
    <Canvas camera={[0, 0, 1]} >
      <StartsCanvas />
    </Canvas>
    </div>
  );
};

const StartsCanvas = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group scale={5} rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#000"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
