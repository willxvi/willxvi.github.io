AFRAME.registerComponent('markerhandler', {

    init: function() {
		
		const aEntity = document.querySelector("#animated-model");
		const animatedMarker = document.querySelector("#animated-marker");
		
		animatedMarker.addEventListener('markerFound', function() {
			aEntity.setAttribute('animation-mixer', {loop: 'once'});	
		});
		
        animatedMarker.addEventListener('mousedown', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
				aEntity.setAttribute('animation', {property: 'position', dur: 1000, to: '2 0.5 0'});					
            }
        });
		
		
}});
