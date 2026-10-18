class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        arr = []
        for i in range(len(nums)):
            if i>0 and nums[i] == nums[i-1]:
                continue
            else:
                arr.append(nums[i])
            
        for i in range(len(arr)):
            nums[i] = arr[i]

        return len(arr)
