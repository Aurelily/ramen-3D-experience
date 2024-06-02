import { useGLTF, PresentationControls, Center } from "@react-three/drei";

export default function Ramen(props) {
  const ramen = useGLTF("./models/Ramen/glTF/ramen-2.gltf");

  return (
    <>
      <Center top>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
        >
          <primitive {...props} object={ramen.scene} castShadow />;
        </PresentationControls>
      </Center>
    </>
  );
}

useGLTF.preload("./models/Ramen/glTF/ramen-2.gltf");
