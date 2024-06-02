import { Environment } from "@react-three/drei";

export default function Env() {
  return (
    <Environment
      background={true}
      backgroundBlurriness={0.36}
      backgroundIntensity={1}
      backgroundRotation={[0, Math.PI / 2, 0]}
      environmentIntensity={1}
      environmentRotation={[0, Math.PI / 2, 0]}
      files={null}
      path="/"
      preset={"apartment"}
      scene={undefined}
      encoding={undefined}
    />
  );
}
