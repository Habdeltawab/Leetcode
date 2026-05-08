/*
 * [271] Encode and Decode Strings (Premium - via NeetCode)
 *
 * https://neetcode.io/problems/string-encode-and-decode
 *
 * Design an algorithm to encode a list of strings to a single string,
 * and decode that single string back to the original list of strings.
 *
 * Example 1:
 * Input: ["neet","code","love","you"]
 * Output: ["neet","code","love","you"]
 *
 * Example 2:
 * Input: ["we","say",":","yes"]
 * Output: ["we","say",":","yes"]
 *
 * Constraints:
 * 0 <= strs.length < 100
 * 0 <= strs[i].length < 200
 * strs[i] contains any possible characters
 */

// @lc code=start
function encode(strs: string[]): string {
	// Prefix each value in array
	let mystr: string = '';

	for (const s of strs) {
		mystr += s.length + '#' + s;
	}

	return mystr;
}

function decode(s: string): string[] {
	let myArr: string[] = [];
	let i = 0;

	while (i < s.length) {
		let j = s.indexOf('#', i);
		let num = Number(s.slice(i, j));
		myArr.push(s.slice(j + 1, j + 1 + num));
		i = j + 1 + num;
	}

	return myArr;
}
// @lc code=end
