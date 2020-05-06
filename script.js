var message, height, i = 0, a = 1, index = 0, k, subIndex;
var tempArrStr = [], mainArrStr_p1 = [], mainArrStr_p2 = [], encodeMessage = "";

message = prompt("Input message: ");
height = prompt("Input height: ");
height = parseInt(height, 10);

k = height;

while(i != height){

  for (var j = i; j < message.length; j+=2*(height-1)) {
    tempArrStr.push(message[j])
  }
  mainArrStr_p1[i] = tempArrStr.join("");
  tempArrStr = [];

  if(i != height-2 && i != height-1){
    for (var t = k; t < message.length; t+=2*(height-1)) {
      tempArrStr.push(message[t]);
    }
  }
  mainArrStr_p2[i] = tempArrStr.join("");
  tempArrStr = [];

  k++;
  i++;
}

mainArrStr_p1 = mainArrStr_p1.reverse();
encodeMessage += mainArrStr_p1[0];

while(a != height){
  subIndex = 0;

  for (var j = 0; j < mainArrStr_p1[a].length; j++) {
    encodeMessage+=mainArrStr_p1[a][j];
    encodeMessage+=mainArrStr_p2[index][subIndex] || "";
    subIndex++;
  }
  index++;
  a++;

}
document.querySelector("#rezult").innerHTML = encodeMessage;
