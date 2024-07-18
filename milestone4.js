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
    Wqueen = document.querySelector(".Wqueen");
    Bqueen = document.querySelector(".Bqueen");
    whites = document.querySelectorAll(".white");
    blacks = document.querySelectorAll(".black");

    boxes.forEach(box=>{
        box.classList.remove("choosed");
    })
}


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
            box.classList.remove("choosed");
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



function WpawnClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];

    if(row==7){
        res.push(String(row)+String(col));
        res.push(String(row-1)+String(col));
        res.push(String(row-2)+String(col));
    }
    else{
        res.push(String(row)+String(col));
        res.push(String(row-1)+String(col));
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
        res.push(String(row)+String(col));
        res.push(String(row+1)+String(col));
        res.push(String(row+2)+String(col));
    }
    else{
        res.push(String(row)+String(col));
        res.push(String(row+1)+String(col));
    }

    path(res);
    console.log(res);
}

function rookClickedPath(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    for(let i=0;col+i<9;i++){
        res.push(String(row)+String(col+i));
    }
    for(let i=1;col-i>0;i++){
        res.push(String(row)+String(col-i));
    }
    
    for(let i=1;row+i<9;i++){
        res.push(String(row+i)+String(col));
    }
    for(let i=1;row-i>0;i++){
        res.push(String(row-i)+String(col));
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

function bishopClickedPath(pos) {
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];
    
    for(let i=0;i<8;i++){
        if(((row+i)>9)||((col+i)>9)){
            break;
        }
        res.push(String(row+i)+String(col+i));
    }
    for(let j=1;j<8;j++){
        if(((row+j)>9)||((col+j)<0)){
            break;
        }
        res.push(String(row+j)+String(col-j));
    }
    for(let k=1;k<8;k++){
        if(((row+k)<0)||((col+k)>9)){
            break;
        }
        res.push(String(row-k)+String(col+k));
    }
    for(let l=1;l<8;l++){
        if(((row+l)<0)||((col+l)<0)){
            break;
        }
        res.push(String(row-l)+String(col-l));
    }

    path(res);
    console.log(res);   
}

function queenClickedPath(pos){
    let Npos = Number(pos);
    const row = Math.floor(Npos/10);
    const col = Npos%10;
    let res=[];

    for(let a1=0;col+a1<9;a1++){
        res.push(String(row)+String(col+a1));
    }
    for(let a2=1;col-a2>0;a2++){
        res.push(String(row)+String(col-a2));
    }
    
    for(let b1=1;row+b1<9;b1++){
        res.push(String(row+b1)+String(col));
    }
    for(let b2=1;row-b2>0;b2++){
        res.push(String(row-b2)+String(col));
    }
    
    for(let c=1;c<8;c++){
        if(((row+c)>9)||((col+c)>9)){
            break;
        }
        res.push(String(row+c)+String(col+c));
    }
    for(let d=1;d<8;d++){
        if(((row+d)>9)||((col+d)<0)){
            break;
        }
        res.push(String(row+d)+String(col-d));
    }
    for(let e=1;e<8;e++){
        if(((row+e)<0)||((col+e)>9)){
            break;
        }
        res.push(String(row-e)+String(col+e));
    }
    for(let f=1;f<8;f++){
        if(((row+f)<0)||((col+f)<0)){
            break;
        }
        res.push(String(row-f)+String(col-f));
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





// second code
// function clickedAfter(coin){

//     console.log(`it is clicked after outer ${coin}`);
//     boxes.forEach(box=>{
//         box.addEventListener("click",(coin)=>{
//             if(box.classList.contains("clicked")&&box.innerHTML==box.id){
//                 console.log("condition has satisfied");
//                 console.log(coin);
//                 console.log(`it is clicked after ${coin}`);
//                 console.log(box.innerHTML);
//                 box.innerHTML=replace(coin,box.id);
//                 console.log(box.innerHTML);
//                 resetClicked();
//             }
//         })
//     })
// }


boxes.forEach(cbox=>{
    cbox.addEventListener("click",()=>{
        if(cbox.classList.contains("clicked")&&(String(cbox.childNodes[0])=="[object Text]")){
            cbox.classList.add("choosed");
            console.log("choosed");
            console.log("choosed with box id =",cbox.id);
            console.log(String(cbox.childNodes[0])=="[object Text]");
            // resetClicked();
            // console.log(cbox.childNodes[0].getAttribute("data-indx"));
        }
        else if(cbox.classList.contains("clicked")&&(String(cbox.childNodes[0])=="[object HTMLImageElement]")){
            cbox.classList.add("choosed");
        }
        // console.log(String(cbox.childNodes[0]))
        // else if(cbox.classList.contains("clicked")&&(String(cbox.childNodes[0])=="[object Text]")){

        // }
    });
});


function clickedAfter(coin){

    console.log(`it is clicked after outer ${coin}`);

    boxes.forEach(box=>{

        let fun = (parm)=>{
            if(box.classList.contains("clicked")&&(String(box.childNodes[0])=="[object Text]")){
                console.log("condition has satisfied");
                console.log("parameters to function",parm);
                console.log(`it is clicked after ${parm}`);
                console.log(box.innerHTML);
                box.innerHTML=replace(parm,box.id);
                console.log(box.innerHTML);
                console.log("condition has satisfied");
                resetChoosed();
            }
        }

        if(box.classList.contains("clicked")&&box.classList.contains("choosed")){
            box.addEventListener("click",fun(coin));;
        }

    });
}


// first code
// boxes.forEach(box=>{
//     box.addEventListener("click",()=>{
//         if(box.classList.contains("clicked")&&box.innerHTML==box.id){
//             console.log("condition has satisfied");
//             console.log(box.innerHTML);
//             box.innerHTML=replace("Wpawn",box.id);
//             console.log(box.innerHTML);
//         }
//     })
// })


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


Wpawns.forEach((Wpawn)=>{
    Wpawn.addEventListener("click",()=>{
        WpawnClickedPath(Wpawn.getAttribute("data-indx"));
        clickedAfter("Wpawn");
        // console.log(Wpawn.getAttribute("data-indx"));
        // Wpawn.classList.toggle("clicked");
    })
});
Bpawns.forEach((Bpawn)=>{
    Bpawn.addEventListener("click",()=>{
        BpawnClickedPath(Bpawn.getAttribute("data-indx"));
        clickedAfter("Bpawn");
        // console.log(Bpawn.getAttribute("data-indx"));
        // Bpawn.classList.toggle("clicked");
    })
});

Wrooks.forEach((Wrook)=>{
    Wrook.addEventListener("click",()=>{
        rookClickedPath(Wrook.getAttribute("data-indx"));
        clickedAfter("Wrook");
        // console.log(Wrook.getAttribute("data-indx"));
        // Wrook.classList.toggle("clicked");
    })
});
Brooks.forEach((Brook)=>{
    Brook.addEventListener("click",()=>{
        rookClickedPath(Brook.getAttribute("data-indx"));
        clickedAfter("Brook");
        // console.log(Brook.getAttribute("data-indx"));
        // Brook.classList.toggle("clicked");
    })
});

Wknights.forEach((Wknight)=>{
    Wknight.addEventListener("click",()=>{
        knightClickedPath(Wknight.getAttribute("data-indx"));
        clickedAfter("Wknight");
        // console.log(Wknight.getAttribute("data-indx"));
        // Wknight.classList.toggle("clicked");
    })
});
Bknights.forEach((Bknight)=>{
    Bknight.addEventListener("click",()=>{
        knightClickedPath(Bknight.getAttribute("data-indx"))
        clickedAfter("Bknight");
        // console.log(Bknight.getAttribute("data-indx"));
        // Bknight.classList.toggle("clicked");
    })
});

Wbishops.forEach((Wbishop)=>{
    Wbishop.addEventListener("click",()=>{
        bishopClickedPath(Wbishop.getAttribute("data-indx"));
        clickedAfter("Wbishop");
        // console.log(Wbishop.getAttribute("data-indx"));
        // Wbishop.classList.toggle("clicked");
    })
});
Bbishops.forEach((Bbishop)=>{
    Bbishop.addEventListener("click",()=>{
        bishopClickedPath(Bbishop.getAttribute("data-indx"));
        clickedAfter("Bbishop");
        // console.log(Bbishop.getAttribute("data-indx"));
        // Bbishop.classList.toggle("clicked");
    })
});

Wking.addEventListener("click",()=>{
    kingClickedPath(Wking.getAttribute("data-indx"));
    clickedAfter("Wking");
    // Wking.classList.toggle("clicked");
});

Bking.addEventListener("click",()=>{
    kingClickedPath(Bking.getAttribute("data-indx"));
    clickedAfter("Bking");
    // console.log(Bking.getAttribute("data-indx"));
    // Bking.classList.toggle("clicked");
});

Wqueens.forEach(Wqueen=>{
    Wqueen.addEventListener("click",()=>{
        queenClickedPath(Wqueen.getAttribute("data-indx"));
        clickedAfter("Wqueen");
        // console.log(Bqueen.getAttribute("data-indx"));
        // Bqueen.style.backgroundColor="green";
        // Bqueen.classList.toggle("clicked");
    });
});
Bqueens.forEach(Bqueen=>{
    Bqueen.addEventListener("click",()=>{
        queenClickedPath(Bqueen.getAttribute("data-indx"));
        clickedAfter("Bqueen");
        // console.log(Bqueen.getAttribute("data-indx"));
        // Bqueen.style.backgroundColor="green";
        // Bqueen.classList.toggle("clicked");
    });
});

