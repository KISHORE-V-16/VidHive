import {Route,Router,BrowserRouter,Routes, useSearchParams, useNavigate} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import Room from  './Pages/Room';
import SignUpPage from './Pages/SignUpPage';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  
  return(
  <>
   <div className="bg-slate-900">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route exact path='/common/:id' element={<PrivateRoute><Room/></PrivateRoute>}/>  
        <Route exact path='/LogIn' element={<LoginPage/>}/>
        <Route exact path='/SignUp' element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
  </div>
  </>
)
}

export default App

// import './App.css';
// import { useEffect, useState } from 'react';
// import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
// import { Color, Euler, Matrix4 } from 'three';
// import { Canvas, useFrame, useGraph } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import { useDropzone } from 'react-dropzone';

// let video;
// let faceLandmarker;
// let lastVideoTime = -1;
// let blendshapes = [];
// let rotation;
// let headMesh = [];

// const options = {
//   baseOptions: {
//     modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
//     delegate: "GPU"
//   },
//   numFaces: 1,
//   runningMode: "VIDEO",
//   outputFaceBlendshapes: true,
//   outputFacialTransformationMatrixes: true,
// };

// function Avatar({ url }) {
//   const { scene } = useGLTF(url);
//   const { nodes } = useGraph(scene);

//   useEffect(() => {
//     if (nodes.Wolf3D_Head) headMesh.push(nodes.Wolf3D_Head);
//     if (nodes.Wolf3D_Teeth) headMesh.push(nodes.Wolf3D_Teeth);
//     if (nodes.Wolf3D_Beard) headMesh.push(nodes.Wolf3D_Beard);
//     if (nodes.Wolf3D_Avatar) headMesh.push(nodes.Wolf3D_Avatar);
//     if (nodes.Wolf3D_Head_Custom) headMesh.push(nodes.Wolf3D_Head_Custom);
//   }, [nodes, url]);

//   useFrame(() => {
//     if (blendshapes.length > 0) {
//       blendshapes.forEach(element => {
//         headMesh.forEach(mesh => {
//           let index = mesh.morphTargetDictionary[element.categoryName];
//           if (index >= 0) {
//             mesh.morphTargetInfluences[index] = element.score;
//           }
//         });
//       });

//       nodes.Head.rotation.set(rotation.x, rotation.y, rotation.z);
//       nodes.Neck.rotation.set(rotation.x / 5 + 0.3, rotation.y / 5, rotation.z / 5);
//       nodes.Spine2.rotation.set(rotation.x / 10, rotation.y / 10, rotation.z / 10);
//     }
//   });

//   return <primitive object={scene} position={[0, -1.75, 3]} />;
// }

// function App() {
//   const [url, setUrl] = useState("https://models.readyplayer.me/6460d95f9ae10f45bffb2864.glb?morphTargets=ARKit&textureAtlas=1024");
//   const { getRootProps } = useDropzone({
//     onDrop: files => {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   });

//   const setup = async () => {
//     const filesetResolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
//     faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, options);

//     video = document.getElementById("video");
//     navigator.mediaDevices.getUserMedia({
//       video: { width: 1280, height: 720 },
//       audio: false,
//     }).then(function (stream) {
//       video.srcObject = stream;
//       video.addEventListener("loadeddata", predict);
//     });
//   };

//   const predict = async () => {
//     let nowInMs = Date.now();
//     if (lastVideoTime !== video.currentTime) {
//       lastVideoTime = video.currentTime;
//       const faceLandmarkerResult = faceLandmarker.detectForVideo(video, nowInMs);

//       if (faceLandmarkerResult.faceBlendshapes && faceLandmarkerResult.faceBlendshapes.length > 0 && faceLandmarkerResult.faceBlendshapes[0].categories) {
//         blendshapes = faceLandmarkerResult.faceBlendshapes[0].categories;

//         const matrix = new Matrix4().fromArray(faceLandmarkerResult.facialTransformationMatrixes[0].data);
//         rotation = new Euler().setFromRotationMatrix(matrix);
//       }
//     }

//     window.requestAnimationFrame(predict);
//   };

//   const handleOnChange = (event) => {
//     setUrl(`${event.target.value}?morphTargets=ARKit&textureAtlas=1024`);
//   };

//   useEffect(() => {
//     setup();
//   }, []);

//   return (
//     <div className="App">
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <p>Drag & drop RPM avatar GLB file here</p>
//       </div>
//       <input className="url" type="text" placeholder="Paste RPM avatar URL" onChange={handleOnChange} />
//       <video className="camera-feed" id="video" autoPlay></video>
//       <Canvas style={{ height: 600 }} camera={{ fov: 25 }} shadows>
//         <ambientLight intensity={0.5} />
//         <Avatar url={url} />
//       </Canvas>
//     </div>
//   );
// }

// export default App;
