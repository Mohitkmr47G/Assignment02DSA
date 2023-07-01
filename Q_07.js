var isMonotonic = function(nums) {
    let start = nums[0];
    let end = nums[nums.length - 1]
    if (start < end) { 
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i+1]) return false;
        }
        return true;
    }
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] < nums[i+1]) return false;
    }
    return true;
};