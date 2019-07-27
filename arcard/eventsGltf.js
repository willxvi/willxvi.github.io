AFRAME.registerComponent('markerhandler', {

	
    init: function() {
		
		alert("teste");
		
		const aEntity = document.querySelector("#animated-model");
		const animatedMarker = document.querySelector("#animated-marker");
		
		if(animatedMarker.object3D.visible == true){
			alert("marker");
			aEntity.setAttribute('animation-mixer', {loop: 'repeat'});	
		};
}});
