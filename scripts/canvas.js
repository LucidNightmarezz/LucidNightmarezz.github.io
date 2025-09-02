let petalImages; //where  different petal images are stored
let petalImagesAmount = 3; //amount of petal images
const sext = `abcdefghijklmnopqrstuvwxyz0123456789<>,./\\?'";:[]{}|=+-_()*&^%$#@!~ `; //Sprite text possible characters
let spritesheet, t, m, b;
function preload() {
  petalImages = [ //add all images to petalImages
    loadImage( '/assets/petals/petal1.png' ),
    loadImage( '/assets/petals/petal2.png' ),
    loadImage( '/assets/petals/petal3.png' ),
    loadImage( '/assets/petals/star.png' )
  ];
  spritesheet = loadImage( "/assets/text/alphabet.png" ); //Sprite Text Spritesheet
  t = loadImage( '/assets/containers/contop.png' ); //container top
  m = loadImage( '/assets/containers/conmid.png' ); //container middle
  b = loadImage( '/assets/containers/conbottom.png' ); //container bottom
}
function petal( Main2 ) { //petal canvas
  const petalSize = 30; //sized  of petals in pixels
  let petals = []; //where petal objects are stored
  const petalAmount = 30; //amount of petals
  const ww = Main2.windowWidth; //window width
  const wh = Main2.windowHeight; //window height
  const newPetal = () => { //create a new petal
    let petal = {
      x: random() * ww, //set random x position
      y: random() * wh, //random petal y
      i: floor( random() * petalImagesAmount ) //random petal image
    }
    return petal;
  }
  for ( let i = 1; i <= petalAmount; i++ ) { //loop for amount of petals
    petals.push( newPetal() ); //create petal
  }
  Main2.setup = () => {
    let a = Main2.createCanvas( ww, wh ); //create Canvas on the petal element
    a.parent( document.getElementById( 'petal' ) ); //set parent to petal div
    Main2.imageMode( CENTER ); //no wonky rotation
  }
  Main2.draw = () => {
    Main2.resizeCanvas( windowWidth, windowHeight ); //yummy responsiveness
    Main2.clear(); //clear old image
    for ( let i = 0; i < petals.length; i++ ) { //loop through petals
      if ( abs( mouseX - petals[ i ].x ) < 40 && abs( mouseY - petals[ i ].y ) < 40 && mouseIsPressed ) { //if mouse down and mouse is within 40 px of petal
          petals[ i ].x = mouseX; //set petal x to mouse x
          petals[ i ].y = mouseY; //set petal y to mouse y
      } else {
        petals[ i ].y += sin( frameCount / 10 + cos( i / 10 ) * 100 ) * 0.3 + 1.3; //petal y movement
        petals [i ].x += cos( frameCount / 50 + cos( i * 10 ) ) * 0.3; //petal x movement
      }
      Main2.push(); //create drawing
      Main2.translate( petals[ i ].x, petals[ i ].y ); //move petal    
      Main2.rotate( sin( frameCount / 1000 + i ) * 30 ); //rotate dat bitch
      if ( petals[ i ].y >= windowHeight + petalSize ) { //if out of frame
        petals[ i ].y =- petalSize; //spawn top of screen
        petals[ i ].x = random() * windowWidth; //new random x pos
        if ( floor( random() * 333 ) == 0 ) { //1 in 333 chance secret star
          petals[ i ].i = petalImagesAmount; //set petal image to secret star
        } else {
          petals[ i ].i = floor( random() * petalImagesAmount ); //new random petal image
        }
      }
      Main2.image( petalImages[ petals[ i ].i ], 0, 0, petalSize, petalSize ); //draw petal
      Main2.pop(); //end drawing
    }
  }
}
function makeText( Main, e, text, Scale=1 ) { //Make Text
  let inputString = text.toLowerCase(); //text string to lowercase
  e.innerText = ""; //remove old text from element
  let Scale2 = ( windowWidth / 1920 ) * Scale; //Auto Scaling x
  let Scale3 = ( windowHeight / 1080 ) * Scale; //Auto Scaling y
  let yinc = 0.35
  if (e.classList.contains("sext3")){
    yinc = 1
  }
  console.log(window.getComputedStyle(e.parentElement).display)
  if ( e.parentElement.classList.contains("con4") && e.id != "splash"){
    yinc=1
  }
  if ( e.parentElement.classList.contains("sext4")){
    e.classList.addClass("sext4")
  }
  Main.setup = () => {
    let y = 1; //y value of character
    let x = 1; //x value of character
    let x2 = 1; //max length of line
    for ( let i = 0; i < inputString.length; i++ ) { //loop through each character in string
      if ( x2 < x ) { //if character x pos is greater than max line length
        x2 = x;  //set max line length
      }  
      if ( inputString[ i ] == "\n" ) { //if character is a break/newline
        x = 0; //set x pos to 0
        y+=yinc; //increase y pos by 1
      }        
      x++; //increase x pos by 1
    }
    let a = Main.createCanvas( x2 * 70 * Scale2 + 70 * Scale2, (y) * (Scale2 * 100)  ); //create scaled canvas
    a.addClass( 'sext2' ); //make sure text appears on top
    a.parent( e ); //add canvas to parent sext text div
    if (e.classList.contains("center2")){
      a.addClass('center2')
    }
  }
  Main.draw = () => {
    Main.clear(); //Clear canvas
    Main.noLoop(); //Make sure canvas doesnt loop
    let w = spritesheet.width / 10; //width of single character on spritesheet
    let h = spritesheet.height / 7; //height of single characrter on spritesheet
    let count = 0; //spritehsheet position
    let sprites = []; //text sprite character list
    for ( let y = 0; y < 7; y++ ) { //loop through each row of text spritesheet
      for ( let x = 0; x < 10; x++ ) { //loop through each column of text spritesheet
        sprites[ count ] = spritesheet.get( x * w, y * h, w, h ); //get character sprite from spritesheet
        count++; //next character selected
      }
    }
    let y = 0; //Letter Y Pos
    let x = 0; //Letter X Pos
    for ( let i = 0; i < inputString.length; i++ ) { //loop through input string
      if ( inputString[ i ] == "\n" ) { //if letter is a break or newline
        y+=yinc; //increase Y Pos by 1
        x = 0; //reset X Pos to 0
      } else {
        Main.push(); //create drawing
        Main.translate( 70 * Scale2 + x * 70 * Scale2, y * 100*Scale2); //move selected letter
        Main.image( sprites[ sext.indexOf( inputString[ i ] ) ], 0, 0, 70 * Scale2, 100 * Scale2 ); //Draw Letter
        Main.pop(); //end drawing
        x++; //increase x pos by 1
      }
    }
  }
}
function makeCon( Main3, e, w, h ) { //make container
  Main3.setup = () => {
    let a = Main3.createCanvas(w, h); //create canvas
    a.addClass('conn'); //Auto Container Class

    a.parent(e); //Set oarent to selected div
  }
  Main3.draw = () => {
    Main3.clear(); //Clear Canvas
    Main3.noLoop(); //Draw doesnt loop
    for ( let i = ( 150 / 1340 ) * h; i < h - ( 150 / 1340 ) * h; i += ( 150 / 1340 ) * h ) { //loop through middle container height increments
      Main3.push(); //create new drawing
      Main3.translate( 0, i ); //move container part
      Main3.image( m, 0, 0, w, ( 150 / 1340 ) * h +1); //draw container part
      Main3.pop(); //end drawing
    }
    Main3.image( t, 0, 0, w, ( 150 / 1340 ) * h+1 ); //draw top container part
    Main3.image( b, 0, h - ( 150 / 1340 ) * h, w, ( 150 / 1340 ) * h ); //draw bottom container part
   }
}
function setup() {
  var elesext =  document.getElementsByClassName('sext'); //sprite text class selectors
  var elecon =  document.getElementsByClassName('con'); //auto containers
  new p5( ( Main2 ) => { 
    petal( Main2 ); //create petal canvas
  } ); 
  for ( let i = 0; i < elesext.length; i++ ) { //loop through sprite text selectors
    let Size = parseFloat( elesext[ i ].getAttribute( "size" ) ); //scale of sprite text
    new p5( ( Main ) => {
        makeText( Main, elesext[ i ], elesext[ i ].innerText, isNaN(Size) ? 1.0 : Size ); //Create Sprite Text
    } );
  }
  for ( let i = 0; i < elecon.length; i++ ) { //loop through auto containers
    let w = elecon[ i ].getBoundingClientRect().width; //get width of container
    let h = elecon[ i ].getBoundingClientRect().height; //get height of container
    new p5( ( Main3 ) => {
          makeCon( Main3, elecon[i], w, h ); //create Auto Container
    } );
  }
}