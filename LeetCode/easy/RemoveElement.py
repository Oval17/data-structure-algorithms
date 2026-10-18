class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        arr = []

        for i in range(len(nums)):
            if(nums[i]==val):
              continue
            
            else : 
              arr.append(nums[i])

        for i in range(len(arr)):
            nums[i] = arr[i]
        return len(arr)
