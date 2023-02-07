/* 
http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

DESCRIPTION:
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" 
*/
function printArray(array)
{
    let answer=""
    for(var i=0;i<array.length-1;i++)
    {
        answer+=array[i]+",";
    }
    answer+=array[i];
    return answer;
}

var array=["h","0","l","a"];
console.log(printArray(array));
