
function distanceFromHqInBlocks(location){
    const headquarters = 42 
    const distance=location-headquarters   
return Math.abs(distance)
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
  }

  
function distanceTravelledInFeet(distA,distB){
    return Math.abs(distB-distA)*264
}

function calculatesFarePrice(start,destination){
    const ride=distanceTravelledInFeet(start,destination)
    if(ride<=400){
        return 0;
    }else if(ride>400 && ride<=2000){
        return(ride-400) * .02;
    }else if(ride>2000 && ride<2500){
        return(25);
    }else{
        return('cannot travel that far');
    }
} 