import { Suspense } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { FloatingIsland } from './FloatingIslands'
import { Portal } from './Portal'
import { FloatingRocks } from './FloatingRocks'

export const SceneContainer = () => {

  return <Suspense fallback={null}>
    <Environment background='only' files='/textures/bg.hdr'/>
    <Environment background={false} files='/textures/envmap.hdr'/>

    <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
    <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

    <FloatingIsland/>
    <Portal/>
    <FloatingRocks/>

  </Suspense>
}
