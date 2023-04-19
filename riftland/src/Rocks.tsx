import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Rocks = () => {
  const gltf = useLoader(GLTFLoader, 'models/rocks.glb')

  return (
    <primitive object={gltf.scene} />
  )
}
