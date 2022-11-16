import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/041-nanoplanet.glb')

  const scene = useRef()
  useFrame(() => {
    scene.current.rotation.y += 0.01
  })

  useFrame(({ camera }) => {
    camera.position.z = 3
  })

  return (
    <group {...props} dispose={null} ref={scene}>
      <mesh geometry={nodes.Icosphere_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Icosphere_2.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.005']} position={[0.36, 0.96, 0.03]} rotation={[0.09, -0.02, -0.4]} scale={0.7} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.005']} position={[0.32, 0.98, -0.03]} rotation={[-0.08, 0.05, -0.4]} scale={0.68} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.005']} position={[0.2, 1.01, -0.05]} rotation={[-0.08, 0.06, -0.13]} scale={0.82} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.005']} position={[0.21, 1.01, 0.04]} rotation={[0.1, 0.03, -0.13]} scale={0.82} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.005']} position={[0.29, 0.98, 0.12]} rotation={[0.18, 0.02, -0.24]} scale={0.82} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.005']} position={[0.26, 0.99, -0.12]} rotation={[-0.15, 0.1, -0.24]} scale={0.51} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.005']} position={[0.39, 0.95, 0.12]} rotation={[0.11, 0.01, -0.4]} scale={0.82} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.005']} position={[0.16, 1, 0.19]} rotation={[0.17, -0.01, -0.24]} scale={0.51} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.005']} position={[0.81, 0.69, 0.31]} rotation={[0.38, -0.13, -0.82]} scale={0.82} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.005']} position={[0.84, 0.6, 0.39]} rotation={[0.38, -0.13, -0.82]} scale={0.82} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.005']} position={[0.88, 0.61, 0.28]} rotation={[0.26, 0, -0.85]} scale={0.82} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.005']} position={[0.79, 0.61, -0.5]} rotation={[-0.07, 0.4, -0.91]} scale={0.82} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Material.005']} position={[0.72, 0.68, -0.51]} rotation={[-0.16, 0.49, -0.75]} scale={0.51} />
      <mesh geometry={nodes.Plane013.geometry} material={materials['Material.005']} position={[0.72, 0.61, -0.6]} rotation={[-0.3, 0.6, -0.74]} scale={0.61} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Material.005']} position={[0.8, 0.65, -0.42]} rotation={[-0.08, 0.39, -0.9]} scale={0.82} />
      <mesh geometry={nodes.Plane015.geometry} material={materials['Material.005']} position={[0.81, 0.53, -0.56]} rotation={[-0.2, 0.55, -1.08]} scale={0.82} />
      <mesh geometry={nodes.Plane016.geometry} material={materials['Material.005']} position={[0.32, -0.47, 0.96]} rotation={[1.65, -0.8, -0.42]} scale={0.53} />
      <mesh geometry={nodes.Plane017.geometry} material={materials['Material.005']} position={[0.42, -0.49, 0.91]} rotation={[1.61, -0.78, -0.62]} scale={0.59} />
      <mesh geometry={nodes.Plane018.geometry} material={materials['Material.005']} position={[0.29, -0.59, 0.92]} rotation={[1.87, -0.86, -0.21]} scale={0.82} />
      <mesh geometry={nodes.Plane019.geometry} material={materials['Material.005']} position={[0.34, -0.54, 0.92]} rotation={[1.61, -0.78, -0.62]} scale={0.82} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Material.005']} position={[0.2, -0.55, 0.95]} rotation={[1.87, -0.86, -0.21]} scale={0.82} />
      <mesh geometry={nodes.Plane021.geometry} material={materials['Material.005']} position={[0.33, -0.65, 0.85]} rotation={[1.79, -0.84, -0.61]} scale={0.74} />
      <mesh geometry={nodes.Plane022.geometry} material={materials['Material.005']} position={[0.39, -0.58, 0.87]} rotation={[1.63, -0.76, -0.6]} scale={0.82} />
      <mesh geometry={nodes.Plane023.geometry} material={materials['Material.005']} position={[0.46, -0.58, 0.84]} rotation={[1.63, -0.76, -0.6]} scale={0.62} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Material.005']} position={[0.22, -0.72, 0.82]} rotation={[2.02, -0.9, -0.38]} scale={0.82} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Material.005']} position={[0.11, 0.28, -0.99]} rotation={[-1.19, 1.03, -0.03]} scale={0.61} />
      <mesh geometry={nodes.Plane026.geometry} material={materials['Material.005']} position={[-0.02, 0.28, -0.99]} rotation={[-1.19, 1.03, -0.03]} scale={0.82} />
      <mesh geometry={nodes.Plane027.geometry} material={materials['Material.005']} position={[-0.06, 0.14, -1.02]} rotation={[-1.4, 1.03, 0]} scale={0.82} />
      <mesh geometry={nodes.Plane028.geometry} material={materials['Material.005']} position={[0.11, 0.14, -1.01]} rotation={[-1.23, 1.02, -0.3]} scale={0.5} />
      <mesh geometry={nodes.Plane029.geometry} material={materials['Material.005']} position={[0.02, 0.16, -1.02]} rotation={[-1.4, 1.03, 0]} scale={0.82} />
      <mesh geometry={nodes.Plane030.geometry} material={materials['Material.005']} position={[-0.23, 0.23, -0.98]} rotation={[-1.85, 0.96, 0.56]} scale={0.69} />
      <mesh geometry={nodes.Plane031.geometry} material={materials['Material.005']} position={[-0.11, 0.24, -1]} rotation={[-1.4, 1.03, 0]} scale={0.64} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.005']} position={[-0.19, 0.14, -1]} rotation={[-1.72, 1.01, 0.3]} scale={0.82} />
      <mesh geometry={nodes.Plane033.geometry} material={materials['Material.005']} position={[-0.07, 0.02, -1.03]} rotation={[-1.72, 1.01, 0.3]} scale={0.82} />
      <mesh geometry={nodes.Plane034.geometry} material={materials['Material.005']} position={[0.06, 0.02, -1.03]} rotation={[-1.24, 1.01, -0.29]} scale={0.67} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.005']} position={[-0.03, -0.12, -1.02]} rotation={[-1.75, 1.05, 0]} scale={0.36} />
      <mesh geometry={nodes.Plane036.geometry} material={materials['Material.005']} position={[-0.2, -0.04, -1.01]} rotation={[-1.92, 1.03, 0.31]} scale={0.82} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.005']} position={[-0.3, 0.05, -0.99]} rotation={[-1.93, 1.03, 0.63]} scale={0.82} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.005']} position={[-0.37, 0.18, -0.94]} rotation={[-1.93, 1.03, 0.63]} scale={0.82} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.005']} position={[-0.48, 0.32, -0.86]} rotation={[-2.14, 0.89, 1.11]} scale={0.62} />
      <mesh geometry={nodes.Plane040.geometry} material={materials['Material.005']} position={[-0.62, 0.08, -0.82]} rotation={[-2.2, 0.81, 1]} scale={0.82} />
      <mesh geometry={nodes.Plane041.geometry} material={materials['Material.005']} position={[-0.53, 0.2, -0.86]} rotation={[-2.2, 0.81, 1]} scale={0.82} />
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.005']} position={[-0.45, 0, -0.93]} rotation={[-2.12, 0.88, 0.79]} scale={0.82} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.005']} position={[-0.37, -0.11, -0.96]} rotation={[-2.14, 0.87, 0.49]} scale={0.82} />
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.005']} position={[-0.26, -0.18, -0.98]} rotation={[-2.14, 0.87, 0.49]} scale={0.82} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.005']} position={[0.47, 0.96, 0.41]} rotation={[0.36, -0.12, -0.52]} scale={0.71} />
      <mesh geometry={nodes.Plane046.geometry} material={materials['Material.005']} position={[0.32, 0.93, 0.58]} rotation={[0.43, -0.15, -0.35]} scale={0.82} />
      <mesh geometry={nodes.Plane047.geometry} material={materials['Material.005']} position={[0.49, 0.89, 0.52]} rotation={[0.43, -0.15, -0.35]} scale={0.82} />
      <mesh geometry={nodes.Plane048.geometry} material={materials['Material.005']} position={[0.3, 0.85, 0.69]} rotation={[0.59, -0.2, -0.3]} scale={0.82} />
      <mesh geometry={nodes.Plane049.geometry} material={materials['Material.005']} position={[0.61, 0.87, 0.41]} rotation={[0.37, -0.1, -0.52]} scale={0.82} />
      <mesh geometry={nodes.Plane050.geometry} material={materials['Material.005']} position={[-0.33, 0.77, 0.61]} rotation={[0.6, 0.15, 0.19]} scale={0.82} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['Material.005']} position={[-0.48, 0.76, 0.5]} rotation={[0.28, 0.45, 0.54]} scale={0.51} />
      <mesh geometry={nodes.Plane052.geometry} material={materials['Material.005']} position={[-0.37, 0.79, 0.56]} rotation={[0.32, 0.5, 0.36]} scale={0.61} />
      <mesh geometry={nodes.Plane053.geometry} material={materials['Material.005']} position={[-0.37, 0.75, 0.62]} rotation={[0.79, 0.08, 0.23]} scale={0.82} />
      <mesh geometry={nodes.Plane054.geometry} material={materials['Material.005']} position={[-0.23, 0.76, 0.66]} rotation={[0.59, 0.18, 0.19]} scale={0.82} />
      <group position={[0.45, 0.74, 0.74]} rotation={[0.73, -0.16, -0.41]} scale={1.08}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[-0.34, 0.68, 0.7]} rotation={[0.85, -0.17, 0.24]} scale={0.81}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.83, 0.55, -0.5]} rotation={[-1.49, -0.47, -1.12]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.4, 0.94, -0.09]} rotation={[-1.02, -1.08, -0.99]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.39, -0.42, 0.96]} rotation={[-0.88, -0.78, -2.72]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.81, 0.53, 0.55]} rotation={[0.32, -0.49, -1.02]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.88, 0.51, 0.43]} rotation={[-0.21, -0.54, -1.21]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.86, 0.43, 0.54]} rotation={[0.32, -0.49, -1.02]} scale={0.69}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.77, 0.45, 0.66]} rotation={[0.68, -0.25, -0.89]} scale={0.75}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
      </group>
      <group position={[-0.15, 0.97, 0.21]} rotation={[0.18, 0.81, 0.13]} scale={0.79}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.Material} />
      </group>
      <group position={[0.85, -0.51, -0.16]} rotation={[-0.62, 0.4, -1.85]} scale={0.75}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.Material} />
      </group>
      <mesh geometry={nodes.Icosphere002.geometry} material={materials.Material} position={[-0.94, 0.95, -0.12]} rotation={[2.48, -0.48, 2.24]} scale={0.65} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials.Material} position={[-0.02, 0.15, 1.33]} rotation={[-1.67, 0.46, 3.13]} scale={0.65} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials.Material} position={[0.58, 1.05, -0.6]} rotation={[2.96, -0.61, -2.59]} scale={0.65} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials.Material} position={[-1.18, -0.32, 0.56]} rotation={[-0.57, 0.25, 2.01]} scale={0.65} />
      <mesh geometry={nodes.Icosphere006.geometry} material={materials.Material} position={[0.03, 1.31, -0.54]} rotation={[2.98, -1.09, -2.9]} scale={0.9} />
      <group position={[0.52, 0.09, 0.85]} rotation={[1.28, -0.38, -0.51]} scale={0.78}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane005_3.geometry} material={materials['Material.008']} />
      </group>
      {/* <mesh geometry={nodes.Plane067.geometry} material={materials['Material.001']} rotation={[0, 0.44, 0]} /> */}
      <mesh geometry={nodes.Icosphere007.geometry} material={materials['Material.009']} position={[-1.21, 0.51, 0.39]} scale={0.88} />
    </group>
  )
}

useGLTF.preload('/041-nanoplanet.glb')
