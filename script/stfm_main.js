```
function hide() {
    document.getElementById("hide").style.visibility = "hidden";
}
function SetAttr(attr,val,parent) {
    var node = document.createAttribute(attr);
    node.value = val;
    parent.setAttributeNode(node);
}
let c_prime = document.getElementById("para1").cloneNode(true);
```
function dr(){
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
        function OneFrame() {
            requestAnimationFrame(OneFrame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            farm.x++;
            farm.draw();
        }
        OneFrame();
    }
}
function OneFrame() {
    requestAnimationFrame(OneFrame());
    farm.x++;
    farm.draw();
}
OneFrame();