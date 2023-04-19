import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { BufferAttribute, Color } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { getMaterial, getMesh, getUvs } from './utils'

export const FloatingIsland = () => {
  const gltf = useLoader(GLTFLoader, '/models/floating_island.glb')

  useEffect(() => {
    if(!gltf) return

    const islandObject3d = gltf.scene.getObjectByName('Island')
    if(!islandObject3d) return

    const islandMesh = getMesh(islandObject3d)
    if(!islandMesh) return

    const uvs = getUvs(islandMesh)
    if(!uvs) return 

    islandMesh.geometry.setAttribute('uv2', new BufferAttribute(uvs.array, 2))

    const islandMaterial = getMaterial(islandMesh)
    if(!islandMaterial) return

    islandMaterial.lightMap = islandMaterial.map
    islandMaterial.lightMapIntensity = 400
    islandMaterial.color = new Color(0.04, 0.06, 0.1)

  }, [gltf])

  return(
    <primitive object={gltf.scene}/>
  )
}
