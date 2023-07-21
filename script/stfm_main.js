function hide() {
    document.getElementById("hide").style.visibility = "hidden";
}
function SetAttr(attr,val,parent) {
    var node = document.createAttribute(attr);
    node.value = val;
    parent.setAttributeNode(node);
}
function Farm() {
    var newFarm = document.createElement("div");
    document.getElementById("farrrrms").appendChild(newFarm);

    SetAttr("class","farm",newFarm);
    SetAttr("id","wrapper",newFarm);

    var i, j;
    for (i=  1  ;i<=  5  ;i++) {
        for (j=  1  ;j<=  5  ;j++) {
            var newPixel = document.createElement("div");
            newFarm.appendChild(newPixel);

            SetAttr("id","00",newPixel);
        
            var newImg = document.createElement("img");
            newPixel.appendChild(newImg);
        
            SetAttr("src","image/Ekd.png",newImg);
        
            var loadingNode = document.createAttribute("loading");
            loadingNode.value = "lazy";
            newImg.setAttributeNode(loadingNode);
        }
    }
}
Farm()