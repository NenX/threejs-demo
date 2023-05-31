import { useEffect } from 'react';
import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export function App() {
    useEffect(() => {
        const scene = new Scene()
        const camer = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camer.position.set(2, 2, 2);


        scene.add(camer)


        const a = new BoxGeometry(1, 1, 1);
        const c = new MeshBasicMaterial({ color: 0x00aeec })
        const cube = new Mesh(a, c)

        scene.add(cube)
        const render = new WebGLRenderer()
        render.setSize(window.innerWidth, window.innerHeight)

        const el = document.querySelector('#sb')

        const or = new OrbitControls(camer, render.domElement)

        function r() {
            if (el) {
                el.appendChild(render.domElement)
                render.render(scene, camer)
            }
            requestAnimationFrame(r)
        }
        r()
        return () => {

        }
    }, [])

    return <div id="sb" style={{ width: '100vw', height: '100vh' }}></div>;
}