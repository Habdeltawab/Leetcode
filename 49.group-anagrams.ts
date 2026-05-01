/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
	// Solution 1

	// const map = new Map<string, string[]>();

	// for (let str of strs) {
	// 	const sortedStr = str.split('').sort().join('');

	// 	if (map.has(sortedStr)) {
	// 		map.get(sortedStr)!.push(str);
	// 	} else {
	// 		map.set(sortedStr, [str]);
	// 	}
	// }

	// return [...map.values()]; // also Array.from(map.values())

	//Solution 2, using frequency array as the key
	const map = new Map<string, string[]>();

	for (let str of strs) {
		let keyArr = new Array(26).fill(0);
		for (let char of str) {
			let arrIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
			keyArr[arrIndex]++;
		}

    const key = keyArr.join(',');

		if (map.has(key)) {
			map.get(key)!.push(str);
		} else {
			map.set(key, [str]);
		}
	}

  return [...map.values()];
}
// @lc code=end
