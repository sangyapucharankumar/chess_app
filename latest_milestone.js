let boxes=document.querySelectorAll(".box");
let pieces=document.querySelectorAll(".piece")
let Bpawns=document.querySelectorAll(".Bpawn");
let Wpawns=document.querySelectorAll(".Wpawn");
let Brooks=document.querySelectorAll(".Brook");
let Wrooks=document.querySelectorAll(".Wrook");
let Wknights=document.querySelectorAll(".Wknight");
let Bknights=document.querySelectorAll(".Bknight");
let Wbishops=document.querySelectorAll(".Wbishop");
let Bbishops=document.querySelectorAll(".Bbishop");
let Wking = document.querySelector(".Wking");
let Bking = document.querySelector(".Bking");
let Wqueens = document.querySelectorAll(".Wqueen");
let Bqueens = document.querySelectorAll(".Bqueen");
let whites = document.querySelectorAll(".white");
let blacks = document.querySelectorAll(".black");

let turn = document.querySelector(".whoseturn");

let whiteStack=[];
let blackStack=[];

function PieceToFrom(Piece,PtoIndx,PfromIndx) {
    this.Piece=Piece;
    this.PfromIndx=PfromIndx;
    this.PtoIndx=PtoIndx;
};


// colouring the boxes is completed

let i=0;
boxes.forEach(box => {
    if(i%9==0){
        i++;
    }
    if(i%2==0){
        box.classList.add("black-square");
        i++;
    }
    else{
        box.classList.add("white-square");
        i++;
    }
});

// this function replaces image at parameter index

function replace(img,indx,Pfrom) {

    console.log("in replace function ",img,"to",indx,"from",Pfrom)
    document.getElementById(Pfrom).innerHTML=Pfrom;

    if((document.getElementById(indx).firstChild.classList!=null)&&(document.getElementById(indx).firstChild.classList.contains("Bking"))){
        alert("congratulations! white won!")
    }else if((document.getElementById(indx).firstChild.classList!=null)&&(document.getElementById(indx).firstChild.classList.contains("Wking"))){
        alert("congratulations! black won!")
    }

    let imgWpawn = `<img class="white Wpawn piece" data-indx="${indx}" src="./chessSetIcons/Wpawn.png" alt=""></img>${indx}`;
    let imgBpawn = `<img class="black Bpawn piece" data-indx="${indx}" src="./chessSetIcons/Bpawn.png" alt=""></img>${indx}`;
    let imgWrook = `<img class="white Wrook piece" data-indx="${indx}" src="./chessSetIcons/Wrook.png" alt="">${indx}`;
    let imgBrook = `<img class="black Brook piece" data-indx="${indx}" src="./chessSetIcons/Brook.png" alt="">${indx}`;
    let imgWknight = `<img class="white Wknight piece" data-indx="${indx}" src="./chessSetIcons/Wknight.png" alt="">${indx}`;
    let imgBknight = `<img class="black Bknight piece" data-indx="${indx}" src="./chessSetIcons/Bknight.png" alt="">${indx}`;
    let imgWbishop = `<img class="white Wbishop piece" data-indx="${indx}" src="./chessSetIcons/Wbishop.png" alt="">${indx}`;
    let imgBbishop = `<img class="black Bbishop piece" data-indx="${indx}" src="./chessSetIcons/Bbishop.png" alt="">${indx}`;
    let imgWqueen = `<img class="white Wqueen piece" data-indx="${indx}" src="./chessSetIcons/Wqueen.png" alt="">${indx}`;
    let imgBqueen = `<img class="black Bqueen piece" data-indx="${indx}" src="./chessSetIcons/Bqueen.png" alt="">${indx}`;
    let imgWking = `<img class="white Wking piece" data-indx="${indx}" src="./chessSetIcons/Wking.png" alt="">${indx}`;
    let imgBking = `<img class="black Bking piece" data-indx="${indx}" src="./chessSetIcons/Bking.png" alt="">${indx}`;

    if((img=="Wpawn")&&(indx.slice(0,1)=="1")){
        let choosedPiece=prompt("choose which piece to replace!")

        if(choosedPiece=="queen"){
            return imgWqueen;
        }
        else if(choosedPiece=="rook"){
            return imgWrook;
        }
        else if(choosedPiece=="bishop"){
            return imgWbishop;
        }
        else if(choosedPiece=="knight"){
            return imgWknight;
        }
    }

    if((img=="Bpawn")&&(indx.slice(0,1)=="8")){
        let choosedPiece=prompt("choose which piece to replace!")

        if(choosedPiece=="queen"){
            return imgBqueen;
        }
        else if(choosedPiece=="rook"){
            return imgBrook;
        }
        else if(choosedPiece=="bishop"){
            return imgBbishop;
        }
        else if(choosedPiece=="knight"){
            return imgBknight;
        }
    }

    if(img=="Wpawn"){
        return imgWpawn;
    }
    if(img=="Bpawn"){
        return imgBpawn;
    }
    if(img=="Wrook"){
        return imgWrook;
    }
    if(img=="Brook"){
        return imgBrook;
    }
    if(img=="Wknight"){
        return imgWknight;
    }
    if(img=="Bknight"){
        return imgBknight;
    }
    if(img=="Wbishop"){
        return imgWbishop;
    }
    if(img=="Bbishop"){
        return imgBbishop;
    }
    if(img=="Wqueen"){
        return imgWqueen;
    }
    if(img=="Bqueen"){
        return imgBqueen;
    }
    if(img=="Wking"){
        return imgWking;
    }
    if(img=="Bking"){
        return imgBking;
    }
    
}


// this function removes the clicked class from all the boxes and reselects the pieces

function resetClicked(){
    
    boxes=document.querySelectorAll(".box");
    pieces=document.querySelectorAll(".piece")
    Bpawns=document.querySelectorAll(".Bpawn");
    Wpawns=document.querySelectorAll(".Wpawn");
    Brooks=document.querySelectorAll(".Brook");
    Wrooks=document.querySelectorAll(".Wrook");
    Wknights=document.querySelectorAll(".Wknight");
    Bknights=document.querySelectorAll(".Bknight");
    Wbishops=document.querySelectorAll(".Wbishop");
    Bbishops=document.querySelectorAll(".Bbishop");
    Wking = document.querySelector(".Wking");
    Bking = document.querySelector(".Bking");
    Wqueens = document.querySelectorAll(".Wqueen");
    Bqueens = document.querySelectorAll(".Bqueen");
    whites = document.querySelectorAll(".white");
    blacks = document.querySelectorAll(".black");
    

    boxes.forEach(box=>{
        box.classList.remove("clicked");
    })
}


// this function removes the clicked class from all the boxes and reselects the pieces

function resetChoosed(){

    boxes=document.querySelectorAll(".box");
    pieces=document.querySelectorAll(".piece")
    Bpawns=document.querySelectorAll(".Bpawn");
    Wpawns=document.querySelectorAll(".Wpawn");
    Brooks=document.querySelectorAll(".Brook");
    Wrooks=document.querySelectorAll(".Wrook");
    Wknights=document.querySelectorAll(".Wknight");
    Bknights=document.querySelectorAll(".Bknight");
    Wbishops=document.querySelectorAll(".Wbishop");
    Bbishops=document.querySelectorAll(".Bbishop");
    Wking = document.querySelector(".Wking");
    Bking = document.querySelector(".Bking");
    Wqueens = document.querySelector(".Wqueen");
    Bqueens = document.querySelector(".Bqueen");
    whites = document.querySelectorAll(".white");
    blacks = document.querySelectorAll(".black");

    boxes.forEach(box=>{
        box.classList.remove("choosed");
    })
}

// functions compares given to arrays

function compArr(arr,prevArr) {
    if(arr.length==prevArr.length){
        for (let i = 0; i < arr.length; i++) {
            if(prevArr[i] != arr[i]){
                // console.log("false");
                return false;
            }
        }
        // console.log("true");
        return true;
    }
    else{
        // console.log("false");
        return false;
    }
}

let prevArr=[];

// adds clicked class to the boxes whose indices present in the given array
function path(arr) {
    console.log("path function started executed!");
    if(compArr(arr,prevArr)){
        console.log("arr and prevArr are same!")
        boxes.forEach(box=>{
            arr.forEach(item=>{
                if(box.getAttribute("id")==item){
                    box.classList.toggle("clicked");
                }
                
            })
        });
    }
    else{
        console.log("arr and prevArr are not same!")
        boxes.forEach(box=>{
            box.classList.remove("clicked");
        });
        boxes.forEach(box=>{
            arr.forEach(item=>{
                if(box.getAttribute("id")==item){
                    box.classList.toggle("clicked");
                }
                
            });
        });
    }
    prevArr = Array.from(arr);
};


// below functions gives the array to path function which can be choosen for the piece to place

function WpawnClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];

    res.push(String(row)+String(col));

    if(row==7){
        if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col-1));
            }
        }
        if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col+1));
            }
        }
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black"));
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black"));
        if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-1)+String(col));
        }
        if((document.getElementById(`${String(row-2)+String(col)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-2)+String(col));
        }
        // res.push(String(row-1)+String(col));
        // res.push(String(row-2)+String(col));
    }
    else{
        if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col-1));
            }
        }
        if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col+1));
            }
        }
        
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList);
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList);
        if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-1)+String(col));
        }
        // res.push(String(row-1)+String(col));
    }
    path(res);
    console.log(res);
}

function BpawnClickedPath(pos) {
    
    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));
    if(row==2){
        if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList){
            if(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList.contains("white")){
                res.push(String(row+1)+String(col-1));
            }
        }
        if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList){
            if(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList.contains("white")){
                res.push(String(row+1)+String(col+1));
            }
        }
        if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+1)+String(col));
        }
        if((document.getElementById(`${String(row+2)+String(col)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+2)+String(col));
        }
        // console.log("is class list undifined",document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList==undefined)
        // console.log(document.getElementById(`${String(row+2)+String(col)}`).firstChild.classList)
    }
    else{
        if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList){
            if(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList.contains("white")){
                res.push(String(row+1)+String(col-1));
            }
        }
        if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList){
            if(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList.contains("white")){
                res.push(String(row+1)+String(col+1));
            }
        }
        if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+1)+String(col));
        }
    }
    
    path(res);
    console.log(res);
}


function WrookClickedPath(pos) {
    
    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));
    for(let i=1;col+i<9;i++){
        if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col+i));
        }
        else if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList.contains("black"))){
            res.push(String(row)+String(col+i));
            break;
        }
        else{
            
            break;
        }
    }
    for(let i=1;col-i>0;i++){
        if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col-i));
        }
        else if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList.contains("black"))){
            res.push(String(row)+String(col-i));
            break;
        }
        else{
            break;
        }
    }
    
    for(let i=1;row+i<9;i++){
        if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col));
        }
        else if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList.contains("black"))){
            res.push(String(row+i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    for(let i=1;row-i>0;i++){
        if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-i)+String(col));
        }
        else if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList.contains("black"))){
            res.push(String(row-i)+String(col));
            break;
        }
        else{
            break;
        }
    }

    path(res);
    console.log(res);
}

function BrookClickedPath(pos) {
    
    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));
    for(let i=1;col+i<9;i++){
        if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col+i));
        }
        else if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList.contains("white"))){
            res.push(String(row)+String(col+i));
            break;
        }
        else{
            
            break;
        }
    }
    for(let i=1;col-i>0;i++){
        if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col-i));
        }
        else if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList.contains("white"))){
            res.push(String(row)+String(col-i));
            break;
        }
        else{
            break;
        }
    }
    
    for(let i=1;row+i<9;i++){
        if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col));
        }
        else if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList.contains("white"))){
            res.push(String(row+i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    for(let i=1;row-i>0;i++){
        if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-i)+String(col));
        }
        else if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList.contains("white"))){
            res.push(String(row-i)+String(col));
            break;
        }
        else{
            break;
        }
    }

    path(res);
    console.log(res);
}


function WknightClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));



    if((document.getElementById(`${String(row+2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row+2)+String(col+1));
    }
    else if((document.getElementById(`${String(row+2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col+1)}`).firstChild.classList.contains("black"))){
        res.push(String(row+2)+String(col+1));
    }
    
    if((document.getElementById(`${String(row+2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row+2)+String(col-1));
    }
    else if((document.getElementById(`${String(row+2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col-1)}`).firstChild.classList.contains("black"))){
        res.push(String(row+2)+String(col-1));
    }
    
    if((document.getElementById(`${String(row-2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row-2)+String(col+1));
    }
    else if((document.getElementById(`${String(row-2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col+1)}`).firstChild.classList.contains("black"))){
        res.push(String(row-2)+String(col+1));
    }
    
    
    if((document.getElementById(`${String(row-2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row-2)+String(col-1));
    }
    else if((document.getElementById(`${String(row-2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col-1)}`).firstChild.classList.contains("black"))){
        res.push(String(row-2)+String(col-1));
    }


    // res.push(String(row+2)+String(col+1));
    // res.push(String(row+2)+String(col-1));
    // res.push(String(row-2)+String(col+1));
    // res.push(String(row-2)+String(col-1));


    if((document.getElementById(`${String(row+1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+2)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col+2));
    }
    else if((document.getElementById(`${String(row+1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+2)}`).firstChild.classList.contains("black"))){
        res.push(String(row+1)+String(col+2));
    }
    
    if((document.getElementById(`${String(row+1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-2)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col-2));
    }
    else if((document.getElementById(`${String(row+1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-2)}`).firstChild.classList.contains("black"))){
        res.push(String(row+1)+String(col-2));
    }
    
    if((document.getElementById(`${String(row-1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+2)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col+2));
    }
    else if((document.getElementById(`${String(row-1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+2)}`).firstChild.classList.contains("black"))){
        res.push(String(row-1)+String(col+2));
    }
    
    if((document.getElementById(`${String(row-1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-2)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col-2));
    }
    else if((document.getElementById(`${String(row-1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-2)}`).firstChild.classList.contains("black"))){
        res.push(String(row-1)+String(col-2));
    }


    // res.push(String(row+1)+String(col+2));
    // res.push(String(row+1)+String(col-2));
    // res.push(String(row-1)+String(col+2));
    // res.push(String(row-1)+String(col-2));
    
    path(res);
    console.log(res);
}

function BknightClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));



    if((document.getElementById(`${String(row+2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row+2)+String(col+1));
    }
    else if((document.getElementById(`${String(row+2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col+1)}`).firstChild.classList.contains("white"))){
        res.push(String(row+2)+String(col+1));
    }
    
    if((document.getElementById(`${String(row+2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row+2)+String(col-1));
    }
    else if((document.getElementById(`${String(row+2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+2)+String(col-1)}`).firstChild.classList.contains("white"))){
        res.push(String(row+2)+String(col-1));
    }
    
    if((document.getElementById(`${String(row-2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row-2)+String(col+1));
    }
    else if((document.getElementById(`${String(row-2)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col+1)}`).firstChild.classList.contains("white"))){
        res.push(String(row-2)+String(col+1));
    }
    
    
    if((document.getElementById(`${String(row-2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row-2)+String(col-1));
    }
    else if((document.getElementById(`${String(row-2)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-2)+String(col-1)}`).firstChild.classList.contains("white"))){
        res.push(String(row-2)+String(col-1));
    }


    // res.push(String(row+2)+String(col+1));
    // res.push(String(row+2)+String(col-1));
    // res.push(String(row-2)+String(col+1));
    // res.push(String(row-2)+String(col-1));


    if((document.getElementById(`${String(row+1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+2)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col+2));
    }
    else if((document.getElementById(`${String(row+1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+2)}`).firstChild.classList.contains("white"))){
        res.push(String(row+1)+String(col+2));
    }
    
    if((document.getElementById(`${String(row+1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-2)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col-2));
    }
    else if((document.getElementById(`${String(row+1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-2)}`).firstChild.classList.contains("white"))){
        res.push(String(row+1)+String(col-2));
    }
    
    if((document.getElementById(`${String(row-1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+2)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col+2));
    }
    else if((document.getElementById(`${String(row-1)+String(col+2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+2)}`).firstChild.classList.contains("white"))){
        res.push(String(row-1)+String(col+2));
    }
    
    if((document.getElementById(`${String(row-1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-2)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col-2));
    }
    else if((document.getElementById(`${String(row-1)+String(col-2)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-2)}`).firstChild.classList.contains("white"))){
        res.push(String(row-1)+String(col-2));
    }


    // res.push(String(row+1)+String(col+2));
    // res.push(String(row+1)+String(col-2));
    // res.push(String(row-1)+String(col+2));
    // res.push(String(row-1)+String(col-2));
    
    path(res);
    console.log(res);
}




function WbishopClickedPath(pos) {
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));
    for(let i=1;i<8;i++){
        if(((row+i)>8)||((col+i)>8)){
            break;
        }
        if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col+i));
        }
        else if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList.contains("black"))){
            res.push(String(row+i)+String(col+i));
            break;
        }
        else{
            break;
        }
    }
    for(let j=1;j<8;j++){
        if(((row+j)>8)||((col+j)<0)){
            break;
        }
        if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList==undefined)){
            res.push(String(row+j)+String(col-j));
        }
        else if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList.contains("black"))){
            res.push(String(row+j)+String(col-j));
            break;
        }
        else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(((row+k)<0)||((col+k)>8)){
            break;
        }
        if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList==undefined)){
            res.push(String(row-k)+String(col+k));
        }
        else if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList.contains("black"))){
            res.push(String(row-k)+String(col+k));
            break;
        }
        else{
            break;
        }
    }
    for(let l=1;l<8;l++){
        if(((row+l)<0)||((col+l)<0)){
            break;
        }
        if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList==undefined)){
            res.push(String(row-l)+String(col-l));
        }
        else if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList.contains("black"))){
            res.push(String(row-l)+String(col-l));
            break;
        }
        else{
            break;
        }
    }

    path(res);
    console.log(res);   
}

function BbishopClickedPath(pos) {
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));
    for(let i=1;i<8;i++){
        if(((row+i)>9)||((col+i)>9)){
            break;
        }
        if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col+i));
        }
        else if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList.contains("white"))){
            res.push(String(row+i)+String(col+i));
            break;
        }
        else{
            break;
        }
    }
    for(let j=1;j<8;j++){
        if(((row+j)>9)||((col+j)<0)){
            break;
        }
        if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList==undefined)){
            res.push(String(row+j)+String(col-j));
        }
        else if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList.contains("white"))){
            res.push(String(row+j)+String(col-j));
            break;
        }
        else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(((row+k)<0)||((col+k)>9)){
            break;
        }
        if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList==undefined)){
            res.push(String(row-k)+String(col+k));
        }
        else if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList.contains("white"))){
            res.push(String(row-k)+String(col+k));
            break;
        }
        else{
            break;
        }
    }
    for(let l=1;l<8;l++){
        if(((row+l)<0)||((col+l)<0)){
            break;
        }
        if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList==undefined)){
            res.push(String(row-l)+String(col-l));
        }
        else if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList.contains("white"))){
            res.push(String(row-l)+String(col-l));
            break;
        }
        else{
            break;
        }
    }

    path(res);
    console.log(res);   
}


function WqueenClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];

    res.push(String(row)+String(col));
    for(let i=1;col+i<9;i++){
        if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col+i));
        }
        else if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList.contains("black"))){
            res.push(String(row)+String(col+i));
            break;
        }
        else{
            
            break;
        }
    }
    for(let i=1;col-i>0;i++){
        if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col-i));
        }
        else if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList.contains("black"))){
            res.push(String(row)+String(col-i));
            break;
        }
        else{
            break;
        }
    }
    
    for(let i=1;row+i<9;i++){
        if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col));
        }
        else if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList.contains("black"))){
            res.push(String(row+i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    for(let i=1;row-i>0;i++){
        if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-i)+String(col));
        }
        else if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList.contains("black"))){
            res.push(String(row-i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    
    


    for(let i=1;i<8;i++){
        if(((row+i)>9)||((col+i)>9)){
            break;
        }
        if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col+i));
        }
        else if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList.contains("black"))){
            res.push(String(row+i)+String(col+i));
            break;
        }
        else{
            break;
        }
    }
    for(let j=1;j<8;j++){
        if(((row+j)>9)||((col+j)<0)){
            break;
        }
        if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList==undefined)){
            res.push(String(row+j)+String(col-j));
        }
        else if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList.contains("black"))){
            res.push(String(row+j)+String(col-j));
            break;
        }
        else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(((row+k)<0)||((col+k)>9)){
            break;
        }
        if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList==undefined)){
            res.push(String(row-k)+String(col+k));
        }
        else if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList.contains("black"))){
            res.push(String(row-k)+String(col+k));
            break;
        }
        else{
            break;
        }
    }
    for(let l=1;l<8;l++){
        if(((row+l)<0)||((col+l)<0)){
            break;
        }
        if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList==undefined)){
            res.push(String(row-l)+String(col-l));
        }
        else if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList.contains("black"))){
            res.push(String(row-l)+String(col-l));
            break;
        }
        else{
            break;
        }
    }
    
    path(res);
    console.log(res);
}

function BqueenClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];

    res.push(String(row)+String(col));
    for(let i=1;col+i<9;i++){
        if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col+i));
        }
        else if((document.getElementById(`${String(row)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row)+String(col+i)}`).firstChild.classList.contains("white"))){
            res.push(String(row)+String(col+i));
            break;
        }
        else{
            
            break;
        }
    }
    for(let i=1;col-i>0;i++){
        if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList==undefined)){
            res.push(String(row)+String(col-i));
        }
        else if((document.getElementById(`${String(row)+String(col-i)}`)!=null)&&(document.getElementById(`${String(row)+String(col-i)}`).firstChild.classList.contains("white"))){
            res.push(String(row)+String(col-i));
            break;
        }
        else{
            break;
        }
    }
    
    for(let i=1;row+i<9;i++){
        if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col));
        }
        else if((document.getElementById(`${String(row+i)+String(col)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col)}`).firstChild.classList.contains("white"))){
            res.push(String(row+i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    for(let i=1;row-i>0;i++){
        if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList==undefined)){
            res.push(String(row-i)+String(col));
        }
        else if((document.getElementById(`${String(row-i)+String(col)}`)!=null)&&(document.getElementById(`${String(row-i)+String(col)}`).firstChild.classList.contains("white"))){
            res.push(String(row-i)+String(col));
            break;
        }
        else{
            break;
        }
    }
    
    


    for(let i=1;i<8;i++){
        if(((row+i)>9)||((col+i)>9)){
            break;
        }
        if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList==undefined)){
            res.push(String(row+i)+String(col+i));
        }
        else if((document.getElementById(`${String(row+i)+String(col+i)}`)!=null)&&(document.getElementById(`${String(row+i)+String(col+i)}`).firstChild.classList.contains("white"))){
            res.push(String(row+i)+String(col+i));
            break;
        }
        else{
            break;
        }
    }
    for(let j=1;j<8;j++){
        if(((row+j)>9)||((col+j)<0)){
            break;
        }
        if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList==undefined)){
            res.push(String(row+j)+String(col-j));
        }
        else if((document.getElementById(`${String(row+j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList.contains("white"))){
            res.push(String(row+j)+String(col-j));
            break;
        }
        else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(((row+k)<0)||((col+k)>9)){
            break;
        }
        if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList==undefined)){
            res.push(String(row-k)+String(col+k));
        }
        else if((document.getElementById(`${String(row-k)+String(col+k)}`)!=null)&&(document.getElementById(`${String(row-k)+String(col+k)}`).firstChild.classList.contains("white"))){
            res.push(String(row-k)+String(col+k));
            break;
        }
        else{
            break;
        }
    }
    for(let l=1;l<8;l++){
        if(((row+l)<0)||((col+l)<0)){
            break;
        }
        if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList==undefined)){
            res.push(String(row-l)+String(col-l));
        }
        else if((document.getElementById(`${String(row-l)+String(col-l)}`)!=null)&&(document.getElementById(`${String(row-l)+String(col-l)}`).firstChild.classList.contains("white"))){
            res.push(String(row-l)+String(col-l));
            break;
        }
        else{
            break;
        }
    }
    
    path(res);
    console.log(res);
}


function WkingClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));


    if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col));
    }
    else if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList.contains("black"))){
        res.push(String(row+1)+String(col));
    }

    if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col));
    }
    else if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList.contains("black"))){
        res.push(String(row-1)+String(col));
    }
    
    if((document.getElementById(`${String(row)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row)+String(col+1));
    }
    else if((document.getElementById(`${String(row)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row)+String(col+1)}`).firstChild.classList.contains("black"))){
        res.push(String(row)+String(col+1));
    }
    
    if((document.getElementById(`${String(row)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row)+String(col-1));
    }
    else if((document.getElementById(`${String(row)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row)+String(col-1)}`).firstChild.classList.contains("black"))){
        res.push(String(row)+String(col-1));
    }




    if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col+1));
    }
    else if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList.contains("black"))){
        res.push(String(row+1)+String(col+1));
    }
    
    if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col-1));
    }
    else if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList.contains("black"))){
        res.push(String(row+1)+String(col-1));
    }
    
    if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col+1));
    }
    else if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black"))){
        res.push(String(row-1)+String(col+1));
    }
    
    
    if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col-1));
    }
    else if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black"))){
        res.push(String(row-1)+String(col-1));
    }


    path(res);
    console.log(res);
}

function BkingClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));


    if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col));
    }
    else if((document.getElementById(`${String(row+1)+String(col)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col)}`).firstChild.classList.contains("white"))){
        res.push(String(row+1)+String(col));
    }

    if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col));
    }
    else if((document.getElementById(`${String(row-1)+String(col)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col)}`).firstChild.classList.contains("white"))){
        res.push(String(row-1)+String(col));
    }
    
    if((document.getElementById(`${String(row)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row)+String(col+1));
    }
    else if((document.getElementById(`${String(row)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row)+String(col+1)}`).firstChild.classList.contains("white"))){
        res.push(String(row)+String(col+1));
    }
    
    if((document.getElementById(`${String(row)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row)+String(col-1));
    }
    else if((document.getElementById(`${String(row)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row)+String(col-1)}`).firstChild.classList.contains("white"))){
        res.push(String(row)+String(col-1));
    }




    if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col+1));
    }
    else if((document.getElementById(`${String(row+1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col+1)}`).firstChild.classList.contains("white"))){
        res.push(String(row+1)+String(col+1));
    }
    
    if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row+1)+String(col-1));
    }
    else if((document.getElementById(`${String(row+1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row+1)+String(col-1)}`).firstChild.classList.contains("white"))){
        res.push(String(row+1)+String(col-1));
    }
    
    if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col+1));
    }
    else if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("white"))){
        res.push(String(row-1)+String(col+1));
    }
    
    
    if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList==undefined)){
        res.push(String(row-1)+String(col-1));
    }
    else if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("white"))){
        res.push(String(row-1)+String(col-1));
    }


    path(res);
    console.log(res);
}




let prevls=[];
let prevfun;


function chooseBox(coin,dataIndx){
    console.log("box choosing has started!");
    console.log(`clicked piece ${coin} with dataIndx ${dataIndx}`);
    console.log("string form of data index",String(dataIndx));
    
    let ls = [];
    
    let fun = (e)=>{
            console.log("event is ",e);
            console.log(e.target);
            console.log("coin and cbox are",coin,e.target);
            console.log("target parent node is",e.target.parentNode);
            console.log("target parent node contains clicked is",e.target.parentNode.classList.contains("clicked"));
            console.log("target contains black",e.target.classList.contains("black"));
            console.log("target contains white",e.target.classList.contains("white"));
            // console.log("string form of first child is",e.target.firstChild.contains("data-indx"));
            if(e.target.classList.contains("clicked")&&(String(e.target.firstChild)=="[object Text]")){
                console.log(`box with id ${e.target.id} is choosen for the piece ${coin}`);
                console.log("for [object Text]");
                e.target.classList.add("choosed");
                // resetClicked();
                removelistners(ls,fun);
                placePieceAtChoosenBox(coin,dataIndx);
            }
            else if(e.target.parentNode.classList.contains("clicked")&&(coin.slice(0,1)=="W")&&(e.target.classList.contains("black"))){
                console.log("string form of first child is",String(e.target.firstChild));
                e.target.parentNode.classList.add("choosed");
                console.log("[object HTMLImageElement]");
                console.log(`box with id ${e.target.id} is choosen for the piece ${coin}`);
                // resetClicked();
                removelistners(ls,fun);
                placePieceAtChoosenBox(coin,dataIndx);
            }
            else if(e.target.parentNode.classList.contains("clicked")&&(coin.slice(0,1)=="B")&&(e.target.classList.contains("white"))){
                console.log("string form of first child is",String(e.target.firstChild));
                e.target.parentNode.classList.add("choosed");
                console.log("[object HTMLImageElement]");
                console.log(`box with id ${e.target.id} is choosen for the piece ${coin}`);
                // resetClicked();
                removelistners(ls,fun);
                placePieceAtChoosenBox(coin,dataIndx);
            }
    }

    console.log("previous list is",prevls);
    removelistners(prevls,prevfun);

    boxes.forEach(cbox=>{
        if(cbox.classList.contains("clicked")&&(cbox.id != String(dataIndx))){
            console.log("i");
            console.log("event listner added to box",cbox.id,`for piece ${coin} at`,String(dataIndx));

            ls.push(cbox)

            cbox.Pcoin = coin;
            cbox.Pcbox = cbox;
            cbox.addEventListener("click",fun);
        }
    });

    prevls=Array.from(ls);
    prevfun=fun;

    function removelistners(list,func){
        list.forEach(item=>{
            item.removeEventListener("click",func);
            console.log("event listeners are removing")
        })
        console.log("event listeners has been removed succesfully")
    }
    
}


let alternate = 0;

let Wpawnfun = (WpawnEvnt)=>{
    WpawnClickedPath(WpawnEvnt.target.getAttribute("data-indx"));
    chooseBox("Wpawn",WpawnEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(WpawnEvnt.target.getAttribute("data-indx"));
}
let Wrookfun = (WrookEvnt)=>{
    WrookClickedPath(WrookEvnt.target.getAttribute("data-indx"));
    chooseBox("Wrook",WrookEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(WrookEvnt.target.getAttribute("data-indx"));
}
let Wknightfun = (WknightEvnt)=>{
    WknightClickedPath(WknightEvnt.target.getAttribute("data-indx"));
    chooseBox("Wknight",WknightEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(WknightEvnt.target.getAttribute("data-indx"));
}
let Wbishopfun = (WbishopEvnt)=>{
    WbishopClickedPath(WbishopEvnt.target.getAttribute("data-indx"));
    chooseBox("Wbishop",WbishopEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(WbishopEvnt.target.getAttribute("data-indx"));
}
let Wkingfun = (WkingEvnt)=>{
    WkingClickedPath(WkingEvnt.target.getAttribute("data-indx"));
    chooseBox("Wking",WkingEvnt.target.getAttribute("data-indx"));
    alternate++;
}
let Wqueenfun = (WqueenEvnt)=>{
    WqueenClickedPath(WqueenEvnt.target.getAttribute("data-indx"));
    chooseBox("Wqueen",WqueenEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BqueenEvnt.target.getAttribute("data-indx"));
}




let Bpawnfun = (BpawnEvnt)=>{
    BpawnClickedPath(BpawnEvnt.target.getAttribute("data-indx"));
    chooseBox("Bpawn",BpawnEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BpawnEvnt.target.getAttribute("data-indx"));
}
let Brookfun = (BrookEvnt)=>{
    BrookClickedPath(BrookEvnt.target.getAttribute("data-indx"));
    chooseBox("Brook",BrookEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BrookEvnt.target.getAttribute("data-indx"));
}
let Bknightfun = (BknightEvnt)=>{
    BknightClickedPath(BknightEvnt.target.getAttribute("data-indx"));
    chooseBox("Bknight",BknightEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BknightEvnt.target.getAttribute("data-indx"));
}
let Bbishopfun = (BbishopEvnt)=>{
    BbishopClickedPath(BbishopEvnt.target.getAttribute("data-indx"));
    chooseBox("Bbishop",BbishopEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BbishopEvnt.target.getAttribute("data-indx"));
}
let Bkingfun = (BkingEvnt)=>{
    BkingClickedPath(BkingEvnt.target.getAttribute("data-indx"));
    chooseBox("Bking",BkingEvnt.target.getAttribute("data-indx"));
    alternate++;
}
let Bqueenfun = (BqueenEvnt)=>{
    BqueenClickedPath(BqueenEvnt.target.getAttribute("data-indx"));
    chooseBox("Bqueen",BqueenEvnt.target.getAttribute("data-indx"));
    alternate++;
    // console.log(BqueenEvnt.target.getAttribute("data-indx"));
}



function whitesTurn(){

    turn.innerHTML="Whites turn";
    console.log("white's turn");
    if(alternate != 0){
        
        console.log("whites turn,blacks click is removed");
        Bpawns.forEach((Bpawn)=>{
            Bpawn.removeEventListener("click",Bpawnfun,false);
        });
        Brooks.forEach((Brook)=>{
            Brook.removeEventListener("click",Brookfun,false);
        });
        Bknights.forEach((Bknight)=>{
            Bknight.removeEventListener("click",Bknightfun,false);
        });
        Bbishops.forEach((Bbishop)=>{
            Bbishop.removeEventListener("click",Bbishopfun,false);
        });
        Bking.removeEventListener("click",Bkingfun,false);
        Bqueens.forEach(Bqueen=>{
            Bqueen.removeEventListener("click",Bqueenfun,false);
        });
        
    }
    
    
    Wpawns.forEach((Wpawn)=>{
        Wpawn.addEventListener("click",Wpawnfun,false);
    });
    Wrooks.forEach((Wrook)=>{
        Wrook.addEventListener("click",Wrookfun,false);
    });
    Wknights.forEach((Wknight)=>{
        Wknight.addEventListener("click",Wknightfun,false);
    });
    Wbishops.forEach((Wbishop)=>{
        Wbishop.addEventListener("click",Wbishopfun,false);
    });
    Wking.addEventListener("click",Wkingfun,false);
    Wqueens.forEach(Wqueen=>{
        Wqueen.addEventListener("click",Wqueenfun,false);
    });
    
}

function blacksTurn(){
    
    turn.innerHTML="Black's turn";
    console.log("Blacks's turn");
    if(alternate!=0){
        console.log("blacks turn,whites click is removed");
        Wpawns.forEach((Wpawn)=>{
            Wpawn.removeEventListener("click",Wpawnfun,false);
        });
        Wrooks.forEach((Wrook)=>{
            Wrook.removeEventListener("click",Wrookfun,false);
        });
        Wknights.forEach((Wknight)=>{
            Wknight.removeEventListener("click",Wknightfun,false);
        });
        Wbishops.forEach((Wbishop)=>{
            Wbishop.removeEventListener("click",Wbishopfun,false);
        });
        Wking.removeEventListener("click",Wkingfun,false);
        Wqueens.forEach(Wqueen=>{
            Wqueen.removeEventListener("click",Wqueenfun,false);
        });
    }
    

    Bpawns.forEach((Bpawn)=>{
        Bpawn.addEventListener("click",Bpawnfun,false);
    });
    Brooks.forEach((Brook)=>{
        Brook.addEventListener("click",Brookfun,false);
    });
    Bknights.forEach((Bknight)=>{
        Bknight.addEventListener("click",Bknightfun,false);
    });
    Bbishops.forEach((Bbishop)=>{
        Bbishop.addEventListener("click",Bbishopfun,false);
    });
    Bking.addEventListener("click",Bkingfun,false);
    Bqueens.forEach(Bqueen=>{
        Bqueen.addEventListener("click",Bqueenfun,false);
    });
    
}

function removeWhiteLis() {
    Wpawns.forEach((Wpawn)=>{
        Wpawn.removeEventListener("click",Wpawnfun,false);
    });
    Wrooks.forEach((Wrook)=>{
        Wrook.removeEventListener("click",Wrookfun,false);
    });
    Wknights.forEach((Wknight)=>{
        Wknight.removeEventListener("click",Wknightfun,false);
    });
    Wbishops.forEach((Wbishop)=>{
        Wbishop.removeEventListener("click",Wbishopfun,false);
    });
    Wking.removeEventListener("click",Wkingfun,false);
    Wqueens.forEach(Wqueen=>{
        Wqueen.removeEventListener("click",Wqueenfun,false);
    });
}

function removeBlackLis(){
    Bpawns.forEach((Bpawn)=>{
        Bpawn.removeEventListener("click",Bpawnfun,false);
    });
    Brooks.forEach((Brook)=>{
        Brook.removeEventListener("click",Brookfun,false);
    });
    Bknights.forEach((Bknight)=>{
        Bknight.removeEventListener("click",Bknightfun,false);
    });
    Bbishops.forEach((Bbishop)=>{
        Bbishop.removeEventListener("click",Bbishopfun,false);
    });
    Bking.removeEventListener("click",Bkingfun,false);
    Bqueens.forEach(Bqueen=>{
        Bqueen.removeEventListener("click",Bqueenfun,false);
    });
}

function placePieceAtChoosenBox(coin,Pfrom){

    console.log(`placing piece at choosen box it is clicked and choosed for ${coin}`);

    let fun = (cbox)=>{
        if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object Text]")){
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id),Pfrom);
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;

        }
        else if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object HTMLImageElement]")&&(coin.slice(0,1)=="W")&&(cbox.childNodes[0].classList.contains("black"))){
            
            console.log("contains black piece in the box");
            
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id),Pfrom);
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;
        }
        else if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object HTMLImageElement]")&&(coin.slice(0,1)=="B")&&(cbox.childNodes[0].classList.contains("white"))){
            
            console.log("contains black piece in the box");
            
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id),Pfrom);
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;
        }
        resetChoosed();
        resetClicked();

        if(coin.slice(0,1)=="W"){
            whiteStack.push(new PieceToFrom(coin,cbox.id,Pfrom))
            // console.log("check if white king checked after whites turn",checkIfWhiteIschecked("white"));
            if(checkIfWhiteIschecked("white")){
                console.log("switched again to whites turn because of check to your white king");
                removeWhiteLis();
                whitesTurn();
            }else{
                console.log("switched to blacks turn");
                checkIfBlackIschecked("white");
                blacksTurn();
            }
        }
        else if(coin.slice(0,1)=="B"){
            blackStack.push(new PieceToFrom(coin,cbox.id,Pfrom))
            // console.log("check if black king checked after blacks turn",checkIfBlackIschecked("black"));
            if(checkIfBlackIschecked("black")){
                console.log("switched again to blacks turn because of check to your black king");
                whitesTurn();
                removeBlackLis();
                blacksTurn();
            }else{
                console.log("switched to whites turn");
                checkIfWhiteIschecked("black");
                whitesTurn();
            }
        }
    }

    boxes.forEach(box=>{

        if(box.classList.contains("choosed")){
            fun(box);
            // box.addEventListener("click",fun(coin));
        }

    });
}





whitesTurn();


function checkIfWhiteIschecked(Aftercoin){

    blacks.forEach(black=>{
        Index=black.getAttribute("data-indx");
        let Bpiece = black.classList[1];
        // console.log(black);
        // console.log(black.classList[1]);
        // console.log("is your white king checked",document.getElementsByClassName("Wking")[0].parentNode.classList.contains("clicked"))

        if(Bpiece=="Bpawn"){
            BpawnClickedPath(Index);
        }
        if(Bpiece=="Brook"){
            BrookClickedPath(Index);
        }
        if(Bpiece=="Bknight"){
            BknightClickedPath(Index);
        }
        if(Bpiece=="Bbishop"){
            BbishopClickedPath(Index);
        }
        if(Bpiece=="Bqueen"){
            BqueenClickedPath(Index);
        }
        if(Bpiece=="Bking"){
            BkingClickedPath(Index);
        }
        // console.log("check cheka check",document.getElementsByClassName("Wking")[0].parentNode.classList.contains("clicked")&&(Aftercoin=="white"));
        if(document.getElementsByClassName("Wking")[0].parentNode.classList.contains("clicked")&&(Aftercoin=="white")){
            alert("white your king is checked protect your king retry!");
            document.getElementsByClassName("Wking")[0].classList.add("checked");
            // return true;
            // return false;
        }
        else if(document.getElementsByClassName("Wking")[0].parentNode.classList.contains("clicked")&&(Aftercoin=="black")){
            alert("white your king is checked protect your king!");
        }
        resetClicked();
    })
    if(document.getElementsByClassName("Wking")[0].classList.contains("checked")){
        document.getElementsByClassName("Wking")[0].classList.remove("checked");
        revert(whiteStack);
        return true;
    }else{
        return false;
    }
}

function checkIfBlackIschecked(Aftercoin){

    whites.forEach(white=>{
        Index=white.getAttribute("data-indx");
        let Wpiece = white.classList[1];
        if(Wpiece=="Wpawn"){
            WpawnClickedPath(Index);
        }
        if(Wpiece=="Wrook"){
            WrookClickedPath(Index);
        }
        if(Wpiece=="Wknight"){
            WknightClickedPath(Index);
        }
        if(Wpiece=="Wbishop"){
            WbishopClickedPath(Index);
        }
        if(Wpiece=="Wqueen"){
            WqueenClickedPath(Index);
        }
        if(Wpiece=="Wking"){
            WkingClickedPath(Index);
        }

        // console.log(document.getElementsByClassName("Bking")[0].parentNode);
        if(document.getElementsByClassName("Bking")[0].parentNode.classList.contains("clicked")&&(Aftercoin=="black")){
            alert("black your king is checked protect your king retry!");
            document.getElementsByClassName("Bking")[0].classList.add("checked");
            // return true;
            // return false;
        }
        else if(document.getElementsByClassName("Bking")[0].parentNode.classList.contains("clicked")&&(Aftercoin=="white")){
            alert("black your king is checked protect your king!");
        }
        resetClicked();
    })
    if(document.getElementsByClassName("Bking")[0].classList.contains("checked")){
        document.getElementsByClassName("Bking")[0].classList.remove("checked");
        revert(blackStack);
        return true;
    }else{
        return false;
    }
}


function revert(stack) {

    console.log("stack is ",stack);
    let lastP=stack.pop();
    console.log("the lastP is",lastP);
    console.log("stack after poping is ",stack);
    let Lbox=document.getElementById(lastP["PfromIndx"]);
    console.log(Lbox);
    Lbox.innerHTML=replace(lastP["Piece"],lastP["PfromIndx"],lastP["PtoIndx"]);
    resetChoosed();
    resetClicked();
}
