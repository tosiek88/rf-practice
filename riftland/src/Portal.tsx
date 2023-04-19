import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { DoubleSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { getMaterial, getMesh } from './utils'

export const Portal = () => {
  const model = useLoader(GLTFLoader, '/models/portal.glb')
  const mask = useLoader(GLTFLoader, '/models/portal_mask.glb')

  useEffect(() => {
    if(!model) return

    const portalObject3d = model.scene.getObjectByName('Portal')
    const portalMesh = getMesh(portalObject3d)

    const portalMaterial = getMaterial(portalMesh)
    if(!portalMaterial) return

    portalMaterial.envMapIntensity = 3.5

    const maskObject3d = mask.scene.getObjectByName('PortalMask')
    const maskMesh = getMesh(maskObject3d)

    const maskMaterial = getMaterial(maskMesh)
    if(!maskMaterial) return

    maskMaterial.side = DoubleSide
  })

  return (
    <>
      <primitive object={model.scene}/>
      <primitive object={mask.scene}/>
    </>
  )
}
