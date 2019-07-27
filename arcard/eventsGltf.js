AFRAME.registerComponent('markerhandler', {

    init: function() {
		
		const aEntity = document.querySelector("#animated-model");
		const animatedMarker = document.querySelector("#animated-marker");
		
		animatedMarker.addEventListener('markerFound', function() {
			aEntity.setAttribute('animation-mixer', {loop: 'once'});	
		});
}});
