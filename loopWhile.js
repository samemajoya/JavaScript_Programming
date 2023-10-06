let breakCount =0;
while(true){

    console.log(`count: ${breakCount +1 }`);
    breakCount++;

    if(breakCount == 5){
        console.log("breaking out of the loop.");
        break;
    }
}