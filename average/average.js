//average

function calculateMean(list){
    const listSum = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );
    const averageList = listSum / list.length;
    return averageList;
}

//medium

const list1 = [100,200,500, 4000000];

const halfList1 = parseInt(list1.length / 2);

function pair(number){
    if (number % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let medium;

if (pair(list1.length)) {
    const element1 = list1[halfList1];
    const element2 = list1[halfList1 + 1];

    const averageElement1And2 = calculateMean([element1, element2])
}
else{
    medium = list1[halfList1];

}