/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();

	for (let i: number = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		if (map.has(diff)) {
			return [map.get(diff)!, i];
		}

		map.set(nums[i], i);
	}

	return [0, 0];
}
// @lc code=end
