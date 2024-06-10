import { useEffect, useRef } from 'react';
import Script from 'next/script';

const ModelViewerComponent: React.FC = () => {
    const modelViewerRef = useRef<any>(null);
  
    useEffect(() => {
      const modelViewer = modelViewerRef.current;
      if (modelViewer) {
        customElements.whenDefined('model-viewer').then(() => {
          const applyVideoTexture = () => {
            if (modelViewer.model && modelViewer.model.materials) {
              const glassMaterial = modelViewer.model.materials.find((material: any) => material.name === 'Glass');
              if (glassMaterial) {
                const videoTexture = modelViewer.createVideoTexture('https://res.cloudinary.com/esnabbhemkop/video/upload/q_100/v1715858001/mario_game_pb8j7l.mp4'); // Replace with your video URL
                if (glassMaterial.pbrMetallicRoughness && glassMaterial.pbrMetallicRoughness.baseColorTexture) {
                  glassMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(videoTexture);

                  const sampler = glassMaterial.pbrMetallicRoughness.baseColorTexture.texture.sampler;

                  const scale = {
                    u: 6.45, // Adjust as needed
                    v: 5.5, // Adjust as needed
                  };
                  
                  const offset = {
                    u: -0.0, // Adjust as needed
                    v: 0.26, // Adjust as needed
                  };
                  
                
                  sampler.setScale(scale);
                  sampler.setOffset(offset);
                  sampler.setRotation(3.14); // 3.14

      


                  console.log('Video texture applied to Glass material');
                } else {
                  console.error('baseColorTexture not found in pbrMetallicRoughness.');
                }
              } else {
                console.error('Glass material not found.');
              }
            }
          };
  
          modelViewer.addEventListener('load', applyVideoTexture);
        });
      }
    }, []);
  
  return (
    <div>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" />
      <model-viewer
        ref={modelViewerRef}
        style={{ width: '100%', height: '600px' }}
        id="animated"
        camera-orbit="-30deg 75deg 4m" 
        touch-action="pan-y"
        exposure="0.75" 
        src="/models/retro_laptop_test2.glb"
        ar
        alt="A 3D model of a laptop"
        shadow-intensity="1.5" 
        shadow-softness="1.5" 
        autoplay
        muted
        scale="3 3 3"
        tone-mapping="neutral" 
        loading="eager"
      />
    </div>
  );
};

export default ModelViewerComponent;
