// Write your solution in this file!
var customerName= 'bob'
//upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.
 function upperCaseCustomerName(){
     customerName = customerName.toUpperCase()
}
var bestCustomer

//setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer(){
    bestCustomer='not bob'
}

//overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer(){
    bestCustomer='maybe bob'
}

const leastFavoriteCustomer= 'kelvin'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='papa tunde'
}