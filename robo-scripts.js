
// Functions given on assignment spec
function sortArrayNums(array){
    for (var i=0; i<array.length; i++){
        for(var j=i+1; j<array.length; j++){
            if (parseInt(array[i])>parseInt(array[j])){
                var temp = array[i];
                array[i]=parseInt(array[j]);
                array[j]=parseInt(temp);
            }
        }
    }
}
function divisibles(arr){
    var sum=0;
    for (var q=0; q<arr.length; q++){
        if (arr[q]%5==0){
            sum = sum + arr[q];
        }
    }
    return sum;
}

// My number form's submit button calls this function
function sortNumbersAndDisplay(){
    let inputArray = [0];
    let inputNums = document.forms[1].elements;

    for(var i=0; i<inputNums.length-1; i++){
        let number = parseInt(inputNums[i].value);
        inputArray.push(number);   
        inputNums[i].value = 0;    
    }
    
    sortArrayNums(inputArray);

    let printSortP = document.getElementById("sorted_display");
    let sortedString = "Your sorted list is: ";
    let j = 0;

    while (j<inputArray.length){
        sortedString += inputArray[j];
        if (j != inputArray.length-1){
            sortedString += ", ";
        }
        j++;
    }
    sortedString += "   Sum of Divisibles: " + divisibles(inputArray).toString();
    printSortP.innerHTML = sortedString;
    console.log(sortedString);
}