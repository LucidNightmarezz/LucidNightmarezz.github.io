let inputSplashes = [];
const maxtextlength = 40;
function LoadFile() {
    var oFrame = document.getElementById("splashfile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        console.log(curLine)
        inputSplashes.push(curLine)
    }
}
const textes = `abcdefghijklmnopqrstuvwxyz0123456789<>,./\\?'";:[]{}|=+-_()*&^%$#@!~ `; 
function splash() { 
    let dupes = [];
    let isDuplicate = inputSplashes.some(function(item, idx){
        if(inputSplashes.indexOf(item) != idx){
            dupes.push({item:item,line:idx+1})
        }
    })
    for (let i = 0; i < inputSplashes.length; i++) {
        let isillegal = false
        let word = inputSplashes[i].toLowerCase();
        if (word.length>maxtextlength){
            inputSplashes[i] = word.substring(0,maxtextlength)+"\n"+word.substring(maxtextlength,word.length)
        }
        for (let x = 0; x < word.length; x++) {
            let letter = word[x]
            if (textes.includes(letter)==false && letter != "\n"){
                isillegal = true
                console.log('Illegal character: ' + letter)
            }
        }
        if (isillegal) {
            console.log("Illegal Character(s) Found: " + word + " - at line: " + i)
        }
    }
    //print out duplicates
    for (let i = 0; i < dupes.length; i++){
        console.log("Duplicate item found in splashes: " + dupes[i].item + " - at line: " + dupes[i].line)
    }
    let Scale2 = ( windowWidth / 1920 ) * 0.4;
    let splash = inputSplashes[ Math.floor( Math.random() * ( inputSplashes.length ) ) ]; //select random splash text
    document.getElementById( "splash" ).innerText = splash; //set the splash
    console.log(splash.split('\n')[0].length)
    document.getElementById("splash").style.left = `${50-100/(document.getElementById("header").getBoundingClientRect().width/((splash.split('\n')[0].length/1.25)*70 * Scale2 ))}%`
}

