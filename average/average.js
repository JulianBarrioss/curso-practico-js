function calculateMean(list){
    const listSum = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );
    const averageList = listSum / list.length;
    return averageList;
}