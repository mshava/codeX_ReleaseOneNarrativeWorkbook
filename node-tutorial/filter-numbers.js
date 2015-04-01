var numbers =  [1, 13, 17, 4, 33, 19, 8 , 49, 45, 23,67,22,99,84, 23, 94];
var evenNumbers = [];

/*
for (var i = 0; i <= numbers.length;i++){
	
	if(numbers[i] % 2 === 0){
		evenNumbers.push(numbers[i]);
 	}

}
*/
 	
evenNumbers = numbers.filter(function (num) {
	return num % 2 === 0;
})

console.log(evenNumbers);