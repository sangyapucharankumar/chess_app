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
let Wqueen = document.querySelector(".Wqueen");
let Bqueen = document.querySelector(".Bqueen");

let turn = document.querySelector(".whoseturn");


let i=0;
boxes.forEach(box => {
    if(i%9==0){
        i++;
    }
    if(i%2==0){
        box.classList.add("black");
        i++;
    }
    else{
        box.classList.add("white");
        i++;
    }
});

// boxes.forEach((box)=>{
//     console.log(box.innerText);
// });
    
pieces.forEach(piece=>{
    piece.addEventListener("click",()=>{
            boxes.forEach(box=>{
                box.classList.remove("clicked");
            })
            pieces.forEach(item=>{
                item.classList.remove("clicked");
            });
            piece.classList.toggle("clicked");
     })
});


Wpawns.forEach((Wpawn)=>{
    Wpawn.addEventListener("click",()=>{
        WpawnClicked(Wpawn.getAttribute("data-indx"));
        // console.log(Wpawn.getAttribute("data-indx"));
        // Wpawn.classList.toggle("clicked");
    })
});
Bpawns.forEach((Bpawn)=>{
    Bpawn.addEventListener("click",()=>{
        BpawnClicked(Bpawn.getAttribute("data-indx"));
        // console.log(Bpawn.getAttribute("data-indx"));
        // Bpawn.classList.toggle("clicked");
    })
});

Wrooks.forEach((Wrook)=>{
    Wrook.addEventListener("click",()=>{
        console.log(Wrook.getAttribute("data-indx"));
        // Wrook.classList.toggle("clicked");
    })
});
Brooks.forEach((Brook)=>{
    Brook.addEventListener("click",()=>{
        BrookClicked(Brook.getAttribute("data-indx"));
        // console.log(Brook.getAttribute("data-indx"));
        // Brook.classList.toggle("clicked");
    })
});

Wknights.forEach((Wknight)=>{
    Wknight.addEventListener("click",()=>{
        console.log(Wknight.getAttribute("data-indx"));
        // Wknight.classList.toggle("clicked");
    })
});
Bknights.forEach((Bknight)=>{
    Bknight.addEventListener("click",()=>{
        console.log(Bknight.getAttribute("data-indx"));
        // Bknight.classList.toggle("clicked");
    })
});

Wbishops.forEach((Wbishop)=>{
    Wbishop.addEventListener("click",()=>{
        console.log(Wbishop.getAttribute("data-indx"));
        // Wbishop.classList.toggle("clicked");
    })
});
Bbishops.forEach((Bbishop)=>{
    Bbishop.addEventListener("click",()=>{
        console.log(Bbishop.getAttribute("data-indx"));
        // Bbishop.classList.toggle("clicked");
    })
});

Wking.addEventListener("click",()=>{
        console.log(Wking.getAttribute("data-indx"));
        // Wking.classList.toggle("clicked");
});

Bking.addEventListener("click",()=>{
        console.log(Bking.getAttribute("data-indx"));
        // Bking.classList.toggle("clicked");
});

Wqueen.addEventListener("click",()=>{
        console.log(Wqueen.getAttribute("data-indx"));
        // Wqueen.style.backgroundColor="green";
        // Wqueen.classList.toggle("clicked");
});

Bqueen.addEventListener("click",()=>{
        console.log(Bqueen.getAttribute("data-indx"));
        // Bqueen.style.backgroundColor="green";
        // Bqueen.classList.toggle("clicked");
});


function path(arr) {
    console.log("function started executed!");
    boxes.forEach(box=>{
        arr.forEach(item=>{
            if(box.getAttribute("id")==item){
                box.classList.toggle("clicked");
            }
        })
    });
};


function WpawnClicked(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let Nrow = row-1;
    let Ncol = col;
    let res=[];
    res.push(String(Nrow)+String(Ncol));
    path(res);
    console.log(res);
}

function BpawnClicked(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let Nrow = row+1;
    let Ncol = col;
    let res=[];
    res.push(String(Nrow)+String(Ncol));
    path(res);
    console.log(res);
}


function BrookClicked(pos) {

    let Npos = Number(pos);
    let row = Math.floor(Npos/10);
    let col = Npos%10;
    let res=[];
    
    for(let i=1;i<9;i++){
        res.push(String(row)+String(i));
    }
    
    for(let i=1;i<9;i++){
        res.push(String(i)+String(col));
    }

    path(res);
    console.log(res);
}