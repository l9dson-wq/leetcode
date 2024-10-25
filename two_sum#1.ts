function twoSum(nums: number[], target: number): number[] {
    let myo: myInterface[] = [];
    let myoCopy: myInterface[] = [];
    let customInterfaceObj: myInterface;
    let x: number = 0;
    let y: number = 0;
    let indexOne: number;
    let indexTwo: number;

    interface myInterface {
        value: number;
        index: number;
    };

    
    nums.map((value:number, index:number)=>{
        customInterfaceObj = {
            value: value,
            index: index
        };
        myo.push(customInterfaceObj);
        myoCopy.push(customInterfaceObj);
    });

    while(x < nums.length){
        while( y < nums.length){
            if ((myo[x].value + myoCopy[y].value)==target){
               if (myo[x].index != myoCopy[y].index) {
                    indexOne = myo[x].index;
                    indexTwo = myoCopy[y].index;
                    return [indexOne, indexTwo];
               }
            }
            y++;
        }
        x++;
        y=0;
    }

    return nums;
}
