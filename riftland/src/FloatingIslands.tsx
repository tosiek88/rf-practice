import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { BufferAttribute, Color } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const FloatingIsland = () => {
  const gltf = useLoader(GLTFLoader, '/models/floating_island.glb')

  useEffect(() => {
    if(!gltf) return

    const object3d = gltf.scene.getObjectByName('Island')
    if(!object3d?.isObject3D) return
    if(!(object3d as THREE.Mesh).isMesh) return

    const mesh:THREE.Mesh = (object3d as THREE.Mesh)

    const uv = (mesh as THREE.Mesh).geometry.attributes.uv
    if(!(uv instanceof BufferAttribute)) return

    const uvs = (uv as BufferAttribute).array

    mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2))

    if(Array.isArray(mesh.material)) return 
    if(!(mesh.material as THREE.MeshStandardMaterial).isMaterial) return 
    const material = (mesh.material as THREE.MeshStandardMaterial)
    material.lightMap = material.map
    material.lightMapIntensity = 400
    material.color = new Color(0.04, 0.06, 0.1)
    console.debug(material, 'mesh.material')
  }, [gltf])

  return(
    <primitive object={gltf.scene}/>
  )
}
