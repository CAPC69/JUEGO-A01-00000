const WIDTH=769;
const HEIGH=472;

let map={
    x:getRandomNumber(WIDTH),
    y:getRandomNumber(HEIGH)
};

let $mapa=document.getElementById('mapa');
let $distance=document.getElementById('distance');
let click=0;

$mapa.addEventListener('click',function(e){
    click++;
    let distance=getDistance(e,map);
    let distanceHint=getDistanceHeint(distance);
    $distance.innerHTML=distanceHint
    
    if (distance<20){
        alert('has encontrado el tesoro en '+click)
    }
    // console.log(distanceHint);
})

