AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        const aEntity2 = document.querySelector("#animated-model2");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('mousedown', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                window.open("https://www.google.com");
            }
            if (aEntity2 && intersectedElement === aEntity2) {
                window.open("https://www.facebook.com");
            }
        });
}});
