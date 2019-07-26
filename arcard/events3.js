AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        const aEntity2 = document.querySelector("#animated-model2");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('mousedown', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
				aEntity.setAttribute('animation', {property: 'rotation'; dur: 3000; to: '0 360 0'; loop: true});		
				alert("Yellow");
            }
            if (aEntity2 && intersectedElement === aEntity2) {
				const position = aEntity2.getAttribute('position');
				aEntity2.setAttribute('animation', {property: 'rotation'; dur: 3000; to: '0 360 0'; loop: true});				
				alert("Blue");
				
            }
        });
}});
