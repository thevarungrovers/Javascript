// To change text
function changetext(){
    document.getElementById('demo').innerHTML ='Hello World!';
}

// to change src attribute | image changer
function changeimg(){
    document.getElementById('image').src = 'https://www.flaticon.com/svg/static/icons/svg/919/919827.svg'
}
function changeimgagain(){
    document.getElementById('image').src = 'images/instagram.png'
}
// size of img inc/dec by some px
function zoomin(){
    var myImg = document.getElementById('sky')
    var currWidth = myImg.clientWidth;
        if(currWidth == 500){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.width = (currWidth + 50) + "px";
        }
}

function zoomout(){
    var myImg = document.getElementById('sky')
    var currWidth = myImg.clientWidth;
        if(currWidth == 50){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.width = (currWidth - 50) + "px";
        }
}

// change img size | to change CSS 
function incimg() {
    document.getElementById('imagesize').style.height = '100px';
}
function decimg() {
    document.getElementById('imagesize').style.height = '200px';
}

// Show/Hide text
function Hidetext(){
    document.getElementById('textCng').style.display = 'none';
}
function Showtext(){
    document.getElementById('textCng').style.display = 'block';
}

// to show alert
function showalert(){
    window.alert("This is alert!!");
}

// print in console
function printconsole(){
    console.log('Hello');
}

// to replace whole text
function replacewhole(){
    document.write('text replaced');
}

// Date and time
function dateprint(){
    document.getElementById('dateprints').innerHTML = Date();
}

// hover effet
function mousehover(){
    // document.getElementById('effhov').style.cursor = 'pointer';
    document.getElementById('effhov').style.color = 'red';
}
function mousehoveroff(){
    // document.getElementById('effhov').style.cursor = 'pointer';
    document.getElementById('effhov').style.display = 'none';
}

// alert on copy
function copytext(){
    document.getElementById('textcopy');
    window.alert('you copied text');
}

