var str = prompt("Enter str: ");
var key = prompt("Enter key: ");
key = parseInt(key, 10);

var i, w;
i = 0;
var index = 0;
var k = key;

var arrstr = [];
var arrstrmain1 = [];
var arrstrmain2 = [];

while(i != key){

  for (var j = i; j < str.length; j+=2*(key-1)) {
    arrstr.push(str[j])
  }
  arrstrmain1[i] = arrstr.join("");
  arrstr = [];

  if(i != key-2 && i != key-1){
    for (var t = k; t < str.length; t+=2*(key-1)) {
      arrstr.push(str[t]);
    }
  }
  arrstrmain2[i] = arrstr.join("");
  arrstr = [];

  k++;
  i++;
}

var str = "";
arrstrmain1 = arrstrmain1.reverse();
str += arrstrmain1[0];
var a = 1;
var index = 0;

while(a != key){
  var subindex = 0;
  for (var j = 0; j < arrstrmain1[a].length; j++) {
    str+=arrstrmain1[a][j];

    str+=arrstrmain2[index][subindex] || "";

    subindex++;
  }
  index++;
  a++;
}
document.write(str);
