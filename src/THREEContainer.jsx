import * as THREE from "three";
import { useEffect, useRef } from "react";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
function ThreeApp() {
  const mount = useRef(null);
  const domElement = useRef(null);
  useEffect(() => {
    if (domElement.current === null) {
      const scene = new Scene();
      const renderer = new WebGLRenderer({ antialias: true });
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      renderer.setSize(window.innerWidth, window.innerHeight);
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);

      camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      mount.current.appendChild(renderer.domElement);
      domElement.current = renderer.domElement;
    }
  });

  return <div ref={mount} />;
}

export default ThreeApp;
