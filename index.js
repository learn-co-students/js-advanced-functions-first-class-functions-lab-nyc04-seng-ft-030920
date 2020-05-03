// Code your solution in this file!
const returnFirstTwoDrivers = function(array){

        const newArray =  array.slice(0,2)
        return newArray
}


const returnLastTwoDrivers = function(array){

      return array.slice(-2)
}


const selectingDrivers = [  returnFirstTwoDrivers,  returnLastTwoDrivers]

function createFareMultiplier(argument) {

   return function(value) {
           
            return argument * value
     
    }


}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers , whichDriver){

       return whichDriver(drivers)

}