var clicks = 0
var rotating = true
var once = 0
var stoped = false;
function rotate(){
    if (clicks==0 && once ==0){
        const newButton = document.createElement("button");
        newButton.innerText = "STOP!!!";
        newButton.onclick = function() { clicks=0;rotating=false;};
        once++; 
        document.getElementById("butt").appendChild(newButton);

        const newButton2 = document.createElement("button");
        newButton2.innerText = "CONTINUE!!!";
        newButton2.onclick = startRotation;
        once++; 
        document.getElementById("butt").appendChild(newButton2);
        
        const origbutt = document.getElementById("booty");
        origbutt.innerText = "FASTER!!";
    }

    
    

    console.log(clicks)
    

    clicks++;
    const rotated = document.getElementById('rotated');
    let angle = 1 * clicks;
    rotated.style.transform = `rotate(${angle}deg)`;
  
    if (!rotating){return 0}
    requestAnimationFrame(rotate)
}
function startRotation() {
    if (!rotating) {
        rotating = true;
        rotate();
    }
}

