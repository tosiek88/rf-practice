import { Suspense } from 'react'
import {Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

export const SceneContainer=()=>{
  console.debug(import.meta.env)
  return <Suspense fallback={null}>
    <Environment background={'only'} files={'/textures/bg.hdr'}/>
    <Environment background={'only'} files={'/textures/envmap.hdr'}/>

    <PerspectiveCamera makeDefault fov={130} position={[-1.75, 10.85, 20.35]} />
    <OrbitControls target={[1,5,0]} maxPolarAngle={Math.PI*0.5} />
  </Suspense>
}
