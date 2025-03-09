
checkSpeed(180)
function checkSpeed(speed){
  const speedLimiter = 70;
  const kmPerPoints =5;

  if(speed < speedLimiter + kmPerPoints)
    console.log( 'OK')
  else{
    const points = Math.floor((speed- speedLimiter)/kmPerPoints);
    if( points >= 12)
        console.log ('Licences Suspended')
    else{
        console.log("Points", points)
    }
    
  }

}