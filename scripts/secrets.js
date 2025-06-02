let floweron = false; //flower anim state to prevent anim overlapping
function flower_secret() { //trigger flower secret
    if ( floweron == false ) { //if anim is not currently playing
        floweron = true; //set anim state to true
        document.getElementById( "flowerSecret" ).classList.add( "floweranim" ); //turn on the animation for the flower
        setTimeout( () => { //wait 3 seconds till animation is over
            document.getElementById( "flowerSecret" ).classList.remove( "floweranim" ); //remove anim from flower
            floweron = false; //anim state set to off
        }, 3000 );
    }
}