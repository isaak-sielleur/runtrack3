var numbers=new Array();
numbers[0]=8;
numbers[1]=5;
numbers[2]=60;
numbers[3]=4;
numbers[4]=3;
numbers[5]=13;
numbers[6]=51;
numbers[7]=6;
var longueur=numbers.length;

console.log(numbers);

var order = ['asc', 'desc'];

function asc(x, y) 
{

    return x - y; //Si a est supérieur à b, a - b retournera un nombre positif, donc b sera trié en premier.
    
}

function tri(numbers, order) 
{

    var tabresult=new Array();
    
    if (order=='asc') 
    {
       t= numbers.sort(asc)
    }

     if (order=='desc') 
     {
       t= numbers.sort(asc)
        t.reverse()
     }

    return t;

}

console.log(tri(numbers, order[0]));
console.log(tri(numbers, order[1]));