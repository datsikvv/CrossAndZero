let body = document.body;
let btn = document.querySelector('.btn');
let winner =document.getElementById("winner");
let wrapfields = document.querySelector('.wrapfields');
let fields = wrapfields.querySelectorAll('.field');
let counter = 0;

for (let i = 0; i < fields.length; i++) {

  let addCross = (event) => {
    let img = document.createElement('img');
    let fld = fields[i];
    img.src = "img/cross.svg";
    img.name = "cross";
    fld.append(img);
    fields[i].removeEventListener('contextmenu', addZero);
    fields[i].removeEventListener('click', addCross);
        event = event || window.event;
        event.preventDefault();
        counter++;;
        checkWinner(counter, 'Crosses ');
        return counter;
  };

  let addZero = (event) => {
  	  let img = document.createElement('img');
    let f = fields[i];
    img.name = "zero";
    img.src = "img/zero.svg";
    fields[i].name = "zero";
    f.append(img);
    fields[i].removeEventListener('contextmenu', addZero);
    fields[i].removeEventListener('click', addCross);
    event = event || window.event
        event.preventDefault();
        counter++;   
        checkWinner(counter, 'Zeros ')
       return counter;
  }; 

  fields[i].addEventListener('click', addCross);
  fields[i].addEventListener('contextmenu', addZero);
};

btn.addEventListener('click', () => {
	location.reload();
});

let checkWinner = (counter, player) => {
    if (counter >= 3 ) {
        check (0, 1, 2, player);
        check (0, 4, 8, player);
        check (0, 3, 6, player);
        check (4, 2, 6, player);
        check (4, 3, 5, player);
        check (4, 1, 7, player);
        check (8, 2, 5, player);
        check (8, 6, 7, player);
    };
};

let check = (a, b, c, player) => {
    if ((fields[a].hasChildNodes() && fields[b].hasChildNodes() && fields[c].hasChildNodes())) {
         if ((fields[a].firstChild).isEqualNode((fields[b].firstChild)) && (fields[b].firstChild).isEqualNode((fields[c].firstChild))) {
         	changeBackground(a, b, c, player);
        };
    };
};

let changeBackground = (a, b, c, player, addZero, addCross) => {
    fields[a].style.background  = 'green';
    fields[b].style.background  = 'green';
    fields[c].style.background  = 'green';
    console.log(player + ' is winner!!');
    winner.innerHTML = player + ' are winner!!';
};

// let removeListener = (addZero, addCross) => {
//   for (let i = 0; i < fields.length; i++) {
//     fields[i].removeEventListener('contextmenu', addZero);
//     fields[i].removeEventListener('click', addCross);
//   }
// }