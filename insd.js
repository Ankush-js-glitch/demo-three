var readlineSync = require('readline-sync');
var mineAge= readlineSync.question('how old are u');

var ankushAge = 24;
var amanAge = 23;
var arunAge = 20


if(ankushAge<amanAge)
{
  console.log("aman age is greater than ankush age")

}
else if (ankushAge==amanAge)
{
  console.log("ankush age is greater than aman age")
}
else if (ankushAge >= arunAge)
{
  console.log("ankush age is greater or equal to arun age")
}
