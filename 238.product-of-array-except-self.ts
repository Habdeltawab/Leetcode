/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
	// Build 2 arrays (prefix & suffix)

	// Prefix
	let prefix: number[] = [1];

	for (let i = 1; i < nums.length; i++) {
		prefix.push(prefix[i - 1] * nums[i - 1]);
	}

	//Suffix
	let suffix: number[] = new Array(nums.length);
	suffix[nums.length - 1] = 1;

	for (let j = nums.length - 2; j >= 0; j--) {
		suffix[j] = suffix[j + 1] * nums[j + 1];
	}

  // Multiply both arrays
  let product: number[] = [];

  for (let k = 0; k < nums.length; k++){
    product[k] = suffix[k] * prefix[k]
  }

	return product;
}
// @lc code=end
