function Start(){
    let canvas = document.getElementById('tutorial');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        let farm = {
            x : 100,
            y : 100,
            width : 50,
            height : 50,
        draw(){
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x,this.y, this.width,this.height);}}

        let keyw = false; let keya = false; let keys = false; let keyd = false;
        function OneFrame() { requestAnimationFrame(OneFrame);
            //document.addEventListener('keydown',function(e) {if (e.code === 'KeyW') {keyw = true;} })
            //document.addEventListener('keydown',function(e) {if (e.code === 'KeyA') {keya = true;} })
            //document.addEventListener('keydown',function(e) {if (e.code === 'KeyS') {keys = true;} })
            //document.addEventListener('keydown',function(e) {if (e.code === 'KeyD') {keyd = true;} })
            //if (keyw = true) {farm.y--;}
            //if (keya = true) {farm.x--;}
            //if (keys = true) {farm.y++;}
            //if (keyd = true) {farm.x++;}
            farm.y++;
            ctx.clearRect(0,0, canvas.width,canvas.height);
            farm.draw();
        }
        OneFrame()
    }
}
