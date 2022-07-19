let bookedDatesV1 = []
let bookedDatesV2 = [];
let bookedDates = bookedDatesV1;   //Bonne nouvelle, j'ai résolu ce bug

localStorageData = localStorageData[0]


if(localStorageData.length > 0){
for (let i = 0; i < localStorageData.length; i++) {
    if (localStorageData[i][0].startsWith('maisonChoisie') && localStorageData[i][1] == 1) {
        let datesAsStrings = localStorageData[i + 1][1];
        let datesArray = datesAsStrings.split(" au ");
        let arrivalDate = new Date(datesArray[0]);
        let departureDate = new Date(datesArray[1]);
        let currentDate = arrivalDate;
        while (currentDate < departureDate){
            currentDate = new Date(currentDate.getTime() + 86400000);
            datesArray.push(currentDate.toLocaleDateString());
        }
        for (const date of datesArray) {
            bookedDatesV1.push(date);
        }
      
    }
    else if (localStorageData[i][0].startsWith('maisonChoisie') && localStorageData[i][1] == 2) {
        let datesAsStrings = localStorageData[i + 1][1];
        let datesArray = datesAsStrings[1].split(" au ");
        let arrivalDate = new Date(datesArray[0]);
        let departureDate = new Date(datesArray[1]);
        let currentDate = arrivalDate;
        while (currentDate.getTime() < departureDate.getTime()){
            currentDate = new Date(currentDate.getTime() + 86400000);
            datesArray.push(currentDate);
        }
        for (const date of datesArray) {
            bookedDatesV2.push(date);
        }


    }


    else {
        continue;
    }
}}