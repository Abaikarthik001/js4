var n = parseInt(prompt("Enter the number of inputs:"))
var names = []
var k = 0
while(k<n)
{
  var value = prompt("Enter Name")
  names.push(value)
  k++
}
names.sort()
console.log("Ascending Order\n"+names)
console.log("Descending Order\n"+names.reverse())