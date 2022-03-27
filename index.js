// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    const newArray =[...array]
    return newArray.slice(0,2)
}

const returnLastTwoDrivers =  function(array){
    const newArray2 =[...array]
    return newArray2.splice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function fareAmount(fare){
        return fare*number
    }
}

const fareDoubler = function fareAmount(fare){
    return fare*2
}

const fareTripler = function fareAmount(fare){
    return fare*3
}

function selectDifferentDrivers(drivers, argument){
    return argument(drivers)
}