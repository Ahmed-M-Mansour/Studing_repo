var measurements = [[22, 10],[10, 13, 15, 14],[5, 27, 33]];
var total = 0;
var average = 0.0;
for (var row = 0; row < measurements.length; row++) {
    for (var col = 0; col < measurements[row].length; col++) {
   total += measurements[row][col];
}   
average = total / measurements[row].length;
console.log(`Student ${parseInt(row+1)} average is  ${average.toFixed(2)}`);
total = 0;
average = 0.0;
}
