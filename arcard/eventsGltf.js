AFRAME.registerComponent('markerhandler', {

    init: function() {
		
		const aEntity = document.querySelector("#animated-model");
		
		if(document.querySelector("a-marker").object3D.visible == true){
			alert("marker")
			aEntity.setAttribute('animation-mixer', {loop: 'repeat'});	
		};
}});
