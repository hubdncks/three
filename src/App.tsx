import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera , OrbitControls, Sky, Stars } from "@react-three/drei";

const BaseBox = () => {
  return (
    <mesh 
      position={[0, -.5, 0]} // 해당 오브젝트의 설치 위치를 설정합니다.
      scale={[1, 1, 1]}      // 해당 오브젝트의 크기를 설정합니다.
    >
      <boxGeometry           // 부피 설정
        args={[1, 1, 1]}     // 부피 인자 값 ( width , height , depth , widthSegments , heightSegments , depthSegments )
      />
      <meshStandardMaterial  // 질감 설정
        color='#fff'         // 질감 색상 값
      />
    </mesh>
  )
}

const App = () => {

  return (
    <div className="App">
      <Canvas
        gl={{ antialias : true }}
      >
        {/** 전체 Scene에 하늘 배경을 적용합니다. */}
        <Sky
          sunPosition={[5, 2, 0]} // 태양의 위치
        />
        {/** 주변 광원 : 모든 오브젝트에 빛을 비추어 가시 형태로 만듭니다. */}
        <ambientLight />
        {/** 포인트 광원 : 한 방향에서 빛이 방출됩니다. 전구와 같은 형태로 오브젝트에 그림자가 생길 수 있습니다. */}
        <pointLight 
          position={[10,10,0]} // 광원의 설치 위치를 설정
          color={0xffffff}     // 광원의 컬러 값을 설정
          intensity={5}        // 광원의 세기를 설정합니다.
        />
        <BaseBox />
        {/** 원근법 기법에 따른 카메라를 설치합니다. */}
        <PerspectiveCamera 
          position={[2, 2 , 2]} // 카매라의 위치입니다.
          makeDefault           // 기본 카메라로 지정합니다.
        />
        {/** 카메라 줌 및 회전을 위한 컨트롤러를 설치합니다. */}
        <OrbitControls
          maxDistance={10}            // 최대 줌 out 값을 설정
          minDistance={0.5}           // 최소 줌 in 값을 설정
          maxPolarAngle={Math.PI / 2} // 최대 수직 회전 theta 값을 설정
        />
      </Canvas>
    </div>
  );
}

export default App;
