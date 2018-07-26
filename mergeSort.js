function mergeSort(array){

var mergedArray = [];

function mergeArray(item){

if(mergedArray.length === 0){
 mergedArray.push(item);
 return;
}

var found = false;
var mid = Math.floor(mergedArray.length/2);
var top = mergedArray.length;
var bot = 0;

while(!found){

if(mid===mergedArray.length){
mid--;
}

 if(mergedArray[mid] === item){
  found = true
 }else if(mergedArray[mid] < item){
  if(top-mid <= 1){
   found = true;
   mid++;
  }else{
   bot = mid;
   mid = Math.floor((top-bot)/2)+bot;
  }
 }else if(mergedArray[mid] > item){
  if(mid-bot === 0){
   found = true;
  }else{
   top = mid;
   mid = Math.floor((top-bot)/2)+bot;
   if(top===mid){
    mid--;
   }
  }
 }
}//END WHILE

mergedArray.splice(mid,0,item);

}//END mergeArray


function decompileArray(array){

var mid = Math.floor(array.length/2);
var array2 = array.splice(mid, array.length-mid);

switch (array.length){
 case 0:
  return;
 break;
 case 1:
  mergeArray(array[0])
 break;
 default:
  decompileArray(array)
}

switch (array2.length){
 case 0:
  return;
 break;
 case 1:
  mergeArray(array2[0])
 break;
 default:
  decompileArray(array2)
}
}

decompileArray(array);

return mergedArray;
}
