import { BufferAttribute, Object3D } from 'three'

export const getMesh = (object3d:Object3D|undefined):THREE.Mesh|undefined => {

  if(object3d === undefined) return 
  if(!object3d?.isObject3D) return
  if(!(object3d as THREE.Mesh).isMesh) return

  return (object3d as THREE.Mesh)
}

export const getUvs = (mesh:THREE.Mesh|undefined):BufferAttribute|undefined => {

  if(mesh === undefined) return
  const uv = mesh.geometry.attributes.uv
  if(!(uv instanceof BufferAttribute)) return

  return (uv as BufferAttribute)
}

export const getMaterial = (mesh:THREE.Mesh|undefined):THREE.MeshStandardMaterial|undefined => {

  if(mesh === undefined) return
  if(Array.isArray(mesh.material)) return 
  if(!(mesh.material as THREE.MeshStandardMaterial).isMaterial) return 

  return (mesh.material as THREE.MeshStandardMaterial)
}

// export const getMateria
