
//Kilometer to Meter
function kilometerToMeter(kilometer){
     
    //condition for positive number and error massage
       if(kilometer > 0){
        var meter = kilometer * 1000;
        
       }
    
       //Error massage
       else{
           return 'Error Number';
       }

       return meter;
}


// Buget Calculator
function budgetCalculator(watch, mobile, laptop){
        //Calculate the item number & amount
    var num = watch * 50;
    var num2 = mobile * 100;
    var num3= laptop *500;

    var totalBujet = num + num2 + num3;

    return totalBujet;
}


//Hotel Cost
function hotelCost(day){
    var totalCost = 0;

    //per day cost 100
    if(day <= 7){
        totalCost = day * 100;
    }

    //per day cost 80 & 100
    else if( day <= 20){
        var fastCost = 7 * 100;
        var secondDayCount = day - 7;
        var secondOffer = secondDayCount * 80;
        
        totalCost = fastCost + secondOffer;
    }

    //per day cost 50, 80 & 100
    else{
        var fastCost = 7 * 100;
        var secondOffer = 13 * 80;
        var thirdDayCount = day -20;
        var thirdOffer = thirdDayCount * 50;

        totalCost = fastCost + secondOffer + thirdOffer;
    }


        return totalCost;
}


//Mega Friend

function megaFriend(name){
 
  var tiny =name[0];
  for(var i=0; i<name.length; i++){
       var friList = name[i];
    if(friList.length > tiny.length){
          tiny = friList;
         
      }
  }

return tiny;
}

