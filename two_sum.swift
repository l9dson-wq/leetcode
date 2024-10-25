class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        for num in (0..<nums.count) {
            for num2 in ((num+1)..<nums.count) {
                if (nums[num]+nums[num2]) == target {
                    return [num, num2]
                }
            }
        }
        return nums
    }
}
