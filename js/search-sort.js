// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for(let numComp = (anArray.length - 1); numComp > 0 ; numComp--){
        for(let i = 0; i < numComp; i++){
            if(anArray[i] > anArray[i + 1]){
                let a = anArray[i];
                anArray[i] = anArray[i + 1];
                anArray[i + 1] = a; 
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for(let fillSlot = 0; fillSlot < (anArray.length - 1); fillSlot++){
        let minPos = fillSlot;
        for(let i = (fillSlot + 1); i < anArray.length; i++){
            if(anArray[i] < anArray[minPos]){
                minPos = i;
            }
        }
        let a = anArray[fillSlot];
        anArray[fillSlot] = anArray[minPos];
        anArray[minPos] = a;
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for(let i = 1; i < anArray.length; i++){
        let insVal = anArray[i];
        let insPos = i - 1;
        while(insPos >= 0 && anArray[insPos] > insVal){
            anArray[insPos + 1] = anArray[insPos];
            insPos = insPos - 1;
        }
        anArray[insPos + 1] = insVal;
    }
}