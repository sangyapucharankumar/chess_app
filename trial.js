let a=Number("32");
let row=Math.floor(a/10);
let col=a%10;
console.log(Math.floor(a/10));
console.log(a%10);

let res=String(row)+String(col);
console.log(res);


// let array = [1,2,3,4,5,6,7,8];
// let boxulu = [2,3,6,8,9];

// function path(arr,boxes) {
//     console.log("function started executed!");
//     boxes.forEach(box=>{
//         arr.forEach(item=>{
//             if(box==item){
//                 console.log(`${box} is present in the given array` );
//             }
//         })
//     });
// };

// path(boxulu,array);
// console.log("\n \n");
// path(array,boxulu);

// pieces.forEach(piece=>{
//     piece.addEventListener("click",()=>{
//             pieces.forEach(item=>{
//                 item.classList.remove("clicked");
//             });
//             piece.classList.toggle("clicked");
//      })
// });


let arr=[1,2,3,4];
let prevArr = Array.from(arr);

function compArr() {
    if(arr.length==prevArr.length){
        for (let i = 0; i < arr.length; i++) {
            if(prevArr[i] != arr[i]){
                console.log("false");
                return false;
            }
        }
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

// compArr();

// for (let i = 0; i < prevArr.length; i++) {
//     console.log(prevArr[i]);
// }

console.log(arr==prevArr);
// console.log(prevArr);

