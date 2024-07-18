// let a = 10;
// console.log(a);
// function fun() {
//     a=5;
//     console.log(a);
// }
// fun()
// console.log(a);


function WhitePiece(Piece,PfromIndx,PtoIndx) {
    this.Piece=Piece;
    this.PfromIndx=PfromIndx;
    this.PtoIndx=PtoIndx;
}

const piece = new WhitePiece("Wpawn","32","52");

console.log(piece);

console.log(piece["Piece"]);
