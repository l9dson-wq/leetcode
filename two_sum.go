func twoSum(nums []int, target int) []int {
    for x:=0; x<len(nums); x++ {
        for y:=x+1; y<len(nums); y++ {
            if nums[x]+nums[y] == target {
                r := []int{x, y};
                return r;
            }
        }
    }
    return nums;
}
