class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}
        for i, num in enumerate(nums):
            dif = target - nums[i]
            if dif in record:
                return [i, record[dif]]
            else:
                record[num] = i
                