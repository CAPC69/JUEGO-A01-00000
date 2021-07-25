let getRandomNumber=size=>{
    return Math.floor(Math.random()*size);
}

let getDistance=(e,objetivo)=>{
    let diffX=e.offsetX-objetivo.x;
    let diffY=e.offsetY-objetivo.y;
    return Math.sqrt((diffX*diffX)+(diffY*diffY));
}
let getDistanceHeint=distance=>{
    if (distance<30){
        return 'estas en lava'
    }   else if (distance<40){
        return 'caliente';
    }   else if (distance<60){
        return 'tibio';
    }   else if (distance<100){
        return 'casi tibio';
    }   else if (distance<180){
        return 'normal';
    }   else if (distance<360){
        return 'frio';
    }   else{
        return '!!!muerto de frio!!!';
    }
}



