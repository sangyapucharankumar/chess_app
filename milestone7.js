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

function replace(img,indx) {

    console.log("in replace function ",img,indx)

    let imgWpawn = `<img class="white Wpawn piece" data-indx="${indx}" src="./chessSetIcons/Wpawn.png" alt=""></img>`;
    let imgBpawn = `<img class="black Bpawn piece" data-indx="${indx}" src="./chessSetIcons/Bpawn.png" alt=""></img>`;
    let imgWrook = `<img class="white Wrook piece" data-indx="${indx}" src="./chessSetIcons/Wrook.png" alt="">`;
    let imgBrook = `<img class="black Brook piece" data-indx="${indx}" src="./chessSetIcons/Brook.png" alt="">`;
    let imgWknight = `<img class="white Wknight piece" data-indx="${indx}" src="./chessSetIcons/Wknight.png" alt="">`;
    let imgBknight = `<img class="black Bknight piece" data-indx="${indx}" src="./chessSetIcons/Bknight.png" alt="">`;
    let imgWbishop = `<img class="white Wbishop piece" data-indx="${indx}" src="./chessSetIcons/Wbishop.png" alt="">`;
    let imgBbishop = `<img class="black Bbishop piece" data-indx="${indx}" src="./chessSetIcons/Bbishop.png" alt="">`;
    let imgWqueen = `<img class="white Wqueen piece" data-indx="${indx}" src="./chessSetIcons/Wqueen.png" alt="">`;
    let imgBqueen = `<img class="black Bqueen piece" data-indx="${indx}" src="./chessSetIcons/Bqueen.png" alt="">`;
    let imgWking = `<img class="white Wking piece" data-indx="${indx}" src="./chessSetIcons/Wking.png" alt="">`;
    let imgBking = `<img class="black Bking piece" data-indx="${indx}" src="./chessSetIcons/Bking.png" alt="">`;

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

    if(row==7){
        if((document.getElementById(`${String(row-1)+String(col-1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col+1));
            }
        }
        if((document.getElementById(`${String(row-1)+String(col+1)}`)!=null)&&document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList){
            if(document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black")){
                res.push(String(row-1)+String(col+1));
            }
        }
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col-1)}`).firstChild.classList.contains("black"));
        // console.log("classListis",document.getElementById(`${String(row-1)+String(col+1)}`).firstChild.classList.contains("black"));
        res.push(String(row)+String(col));
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
        res.push(String(row)+String(col));
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
        res.push(String(row)+String(col));
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
        res.push(String(row)+String(col));
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


function knightClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));

    res.push(String(row+2)+String(col+1));
    res.push(String(row+2)+String(col-1));
    res.push(String(row-2)+String(col+1));
    res.push(String(row-2)+String(col-1));

    res.push(String(row+1)+String(col+2));
    res.push(String(row+1)+String(col-2));
    res.push(String(row-1)+String(col+2));
    res.push(String(row-1)+String(col-2));
    
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
        else if((document.getElementById(`${String(row-j)+String(col-j)}`)!=null)&&(document.getElementById(`${String(row+j)+String(col-j)}`).firstChild.classList.contains("white"))){
            res.push(String(row-j)+String(col-j));
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




function kingClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    res.push(String(row)+String(col));

    res.push(String(row+1)+String(col));
    res.push(String(row-1)+String(col));
    res.push(String(row)+String(col+1));
    res.push(String(row)+String(col-1));

    res.push(String(row+1)+String(col+1));
    res.push(String(row+1)+String(col-1));
    res.push(String(row-1)+String(col+1));
    res.push(String(row-1)+String(col-1));


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
    knightClickedPath(WknightEvnt.target.getAttribute("data-indx"));
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
    kingClickedPath(WkingEvnt.target.getAttribute("data-indx"));
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
    knightClickedPath(BknightEvnt.target.getAttribute("data-indx"));
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
    kingClickedPath(BkingEvnt.target.getAttribute("data-indx"));
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




function placePieceAtChoosenBox(coin,Pfrom){

    console.log(`placing piece at choosen box it is clicked and choosed for ${coin}`);

    let fun = (cbox)=>{
        if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object Text]")){
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id));
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;

        }
        else if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object HTMLImageElement]")&&(coin.slice(0,1)=="W")&&(cbox.childNodes[0].classList.contains("black"))){
            
            console.log("coitains black piece in the box");
            
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id));
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;
        }
        else if(cbox.classList.contains("choosed")&&(String(cbox.childNodes[0])=="[object HTMLImageElement]")&&(coin.slice(0,1)=="B")&&(cbox.childNodes[0].classList.contains("white"))){
            
            console.log("coitains black piece in the box");
            
            console.log(`requested to place the piece ${coin} in th box ${cbox.id}`);
            console.log(cbox.innerHTML);
            cbox.innerHTML=replace(String(coin),String(cbox.id));
            console.log(cbox.innerHTML);
            console.log(`piece ${coin} is placed in the box ${cbox.id}`);
            document.getElementById(Pfrom).innerHTML=Pfrom;
        }

        if(coin.slice(0,1)=="W"){
            whiteStack.push(new PieceToFrom(coin,cbox.id,Pfrom))
            console.log("switched to blacks turn");
            blacksTurn();
        }
        else{
            blackStack.push(new PieceToFrom(coin,cbox.id,Pfrom))
            console.log("switched to whites turn");
            whitesTurn();
        }
        resetChoosed();
        resetClicked();
    }

    boxes.forEach(box=>{

        if(box.classList.contains("choosed")){
            fun(box);
            // box.addEventListener("click",fun(coin));
        }

    });
}



// pieces.forEach(piece=>{
//     piece.addEventListener("click",()=>{

//         console.log("pices has removed all path");
//         boxes.forEach(box=>{
//             box.classList.remove("clicked");
//         })
//         pieces.forEach(item=>{
//             item.classList.remove("clicked");
//         });
//         // let indx = piece.getAttribute("data-indx")
//         // let Pbox=document.getElementById(indx);
//         // Pbox.classList.add("clicked")
//         // piece.classList.toggle("clicked");
//     })
// });


// Wpawns.forEach((Wpawn)=>{
//     Wpawn.addEventListener("click",()=>{
//         WpawnClickedPath(Wpawn.getAttribute("data-indx"));
//         chooseBox("Wpawn",Wpawn.getAttribute("data-indx"));
//         // console.log(Wpawn.getAttribute("data-indx"));
//         // Wpawn.classList.toggle("clicked");
//     },false);
// });
// Bpawns.forEach((Bpawn)=>{
//     Bpawn.addEventListener("click",()=>{
//         BpawnClickedPath(Bpawn.getAttribute("data-indx"));
//         chooseBox("Bpawn",Bpawn.getAttribute("data-indx"));
//         // console.log(Bpawn.getAttribute("data-indx"));
//         // Bpawn.classList.toggle("clicked");
//     },false);
// });

// Wrooks.forEach((Wrook)=>{
//     Wrook.addEventListener("click",()=>{
//         rookClickedPath(Wrook.getAttribute("data-indx"));
//         chooseBox("Wrook",Wrook.getAttribute("data-indx"));
//         // console.log(Wrook.getAttribute("data-indx"));
//         // Wrook.classList.toggle("clicked");
//     },false);
// });
// Brooks.forEach((Brook)=>{
//     Brook.addEventListener("click",()=>{
//         rookClickedPath(Brook.getAttribute("data-indx"));
//         chooseBox("Brook",Brook.getAttribute("data-indx"));
//         // console.log(Brook.getAttribute("data-indx"));
//         // Brook.classList.toggle("clicked");
//     },false);
// });

// Wknights.forEach((Wknight)=>{
//     Wknight.addEventListener("click",()=>{
//         knightClickedPath(Wknight.getAttribute("data-indx"));
//         chooseBox("Wknight",Wknight.getAttribute("data-indx"));
//         // console.log(Wknight.getAttribute("data-indx"));
//         // Wknight.classList.toggle("clicked");
//     },false);
// });
// Bknights.forEach((Bknight)=>{
//     Bknight.addEventListener("click",()=>{
//         knightClickedPath(Bknight.getAttribute("data-indx"))
//         chooseBox("Bknight",Bknight.getAttribute("data-indx"));
//         // console.log(Bknight.getAttribute("data-indx"));
//         // Bknight.classList.toggle("clicked");
//     },false);
// });

// Wbishops.forEach((Wbishop)=>{
//     Wbishop.addEventListener("click",()=>{
//         bishopClickedPath(Wbishop.getAttribute("data-indx"));
//         chooseBox("Wbishop",Wbishop.getAttribute("data-indx"));
//         // console.log(Wbishop.getAttribute("data-indx"));
//         // Wbishop.classList.toggle("clicked");
//     },false);
// });
// Bbishops.forEach((Bbishop)=>{
//     Bbishop.addEventListener("click",()=>{
//         bishopClickedPath(Bbishop.getAttribute("data-indx"));
//         chooseBox("Bbishop",Bbishop.getAttribute("data-indx"));
//         // console.log(Bbishop.getAttribute("data-indx"));
//         // Bbishop.classList.toggle("clicked");
//     },false);
// });

// Wking.addEventListener("click",()=>{
//     kingClickedPath(Wking.getAttribute("data-indx"));
//     chooseBox("Wking",Wking.getAttribute("data-indx"));
//     // Wking.classList.toggle("clicked");
// },false);

// Bking.addEventListener("click",()=>{
//     kingClickedPath(Bking.getAttribute("data-indx"));
//     chooseBox("Bking",Bking.getAttribute("data-indx"));
//     // console.log(Bking.getAttribute("data-indx"));
//     // Bking.classList.toggle("clicked");
// },false);

// Wqueens.forEach(Wqueen=>{
//     Wqueen.addEventListener("click",()=>{
//         queenClickedPath(Wqueen.getAttribute("data-indx"));
//         chooseBox("Wqueen",Wqueen.getAttribute("data-indx"));
//         // console.log(Bqueen.getAttribute("data-indx"));
//         // Bqueen.style.backgroundColor="green";
//         // Bqueen.classList.toggle("clicked");
//     },false);
// });
// Bqueens.forEach(Bqueen=>{
//     Bqueen.addEventListener("click",()=>{
//         queenClickedPath(Bqueen.getAttribute("data-indx"));
//         chooseBox("Bqueen",Bqueen.getAttribute("data-indx"));
//         // console.log(Bqueen.getAttribute("data-indx"));
//         // Bqueen.style.backgroundColor="green";
//         // Bqueen.classList.toggle("clicked");
//     },false);
// });




whitesTurn();


