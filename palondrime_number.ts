function isPalindrome(x: number): boolean {
    let toStringNum: string[] = x.toString().split("").reverse();

    if(parseInt(toStringNum.join(""))==x){
        return true;
    }

    return false;
}
