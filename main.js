let scene, camera, renderer, controls

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 4;
    camera.position.y = 1.3;
    camera.position.z = 4;

    let alight = new THREE.AmbientLight(0x404040, 8);
    scene.add(alight);

    let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add( directionalLight );

    var light1 = new THREE.PointLight( 0xffffff, 1, 10 );
    light1.position.set( 100, 50, 50 );
    scene.add( light1 );
    
    var light2 = new THREE.PointLight( 0xffffff, 1, 10 );
    light2.position.set( 50, 100, 50 );
    scene.add( light2 );
    
    var light3 = new THREE.PointLight( 0xffffff, 1, 10 );
    light3.position.set( 50, 50, 100 );
    scene.add( light3 );

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    camera.position.set( 0, 30, 200 );
    controls.update();
}

let loader = new THREE.GLTFLoader();
loader.load("scene.gltf", function(gltf){
    car = scene.add(gltf.scene);
    car.scale.set(.5,.5,.5)
    renderer.render(scene, camera);
});

init()

var animate = function () {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
};

animate();