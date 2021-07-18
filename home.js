
/* var n = prompt('esmet chie?');
var x= prompt('motevalede chandi?');
var y= 1400-x;
var z=prompt('kodom shahri?');

document.getElementById('mamad').innerHTML = n +' '+ y + " ساله از " + z; */
let rnum =getRandomNum();
window.onload = function(){
    
    document.getElementById("PG").addEventListener("click", playGame);
    
    
 
}

function playGame (){
    let hadsBezan = document.getElementById("vorodi").value;
    
  document.getElementById('bazi').innerHTML = isToLow();

}


function getRandomNum(){
    let randomNum = Math.floor(Math.random() * 100) + 1 ;
    return randomNum;
}

function isToLow(){
    let hadsBezan = document.getElementById("vorodi").value;
    if(hadsBezan == rnum){
        return('بردیییییییی!!!!');
    }else if(hadsBezan<rnum){
        if(hadsBezan<rnum - 10){
            return('عددت خیلی کوچیکتره');
        }else{
            return('عددت کوچیکتره');
        }
    }else {
        if(hadsBezan>rnum + 10){
            return('عددت خیلی بزرگتره');
        }else{
            return('عددت بزرگتره ');
        }

    }
}