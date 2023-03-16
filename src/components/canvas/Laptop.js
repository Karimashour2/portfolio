import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import download from '../../assets/download.png';
import Loader from "../Loader";

const CV_FILE_URL= `${window.location.origin}/Karim-Ashour.pdf`;

const Laptop = () => {

  return (
    <div className="canvas-container absolute lg:right-0 lg:top-[10%] lg:w-[60%] lg:h-[90%] cursor-grab w-full h-[50%] bottom-[20%] ">
      <Canvas className="z-[100]" camera={{ position: [-5, 0, -15], fov: 55 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={<Loader/>}>
          <group rotation={[0, Math.PI, 0]} position={[-1.5, 1.5, 0]}>
            <LaptopCanvas />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -2.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

const LaptopCanvas = (props) => {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("laptop/mac-draco.glb");
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  const downloadFile = (url)=> {
    const filename = 'Karim-Ashour.pdf'
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[-0.13, 0.05, 0.07]}
              transform
              occlude
            >
              <div
                className="wrapper "
                onPointerDown={(e) => e.stopPropagation()}
              >
                <div 
                  onClick={()=> downloadFile(CV_FILE_URL)}
                  className=" h-[218px] w-[335px] flex flex-col mt-[30%] ml-10 items-center ">
                  <div className="w-[109px] h-[167px] ">
                  <img
                    src={download}
                    alt="logo"
                    className="w-9 h-9 object-contain cursor-pointer"
                  />
                  <p className="text-black text-[18px] font-bold cursor-pointer">
                    Get My CV
                  </p>
                  </div>
                </div>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

export default Laptop;
