/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();

	for (const num of nums) {
		// Frequency map
		if (map.has(num)) map.set(num, map.get(num)! + 1);
		else map.set(num, 1);
	}

	//Bucket Sort solution
	// 2nd DS for bucket sort into an array of arrays because same numbers might have the same frequency
	const arr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

	for (const [key, value] of map) {
		arr[value].push(key);
	}

	// Get the K elements
	const result: number[] = [];

	for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
		//Check length at index
		result.push(...arr[i]);
	}

	return result.slice(0, k);
}
// @lc code=end
