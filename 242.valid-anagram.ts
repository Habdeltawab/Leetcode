/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (68.03%)
 * Likes:    14396
 * Dislikes: 480
 * Total Accepted:    6.1M
 * Total Submissions: 9M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	const map = new Map<string, number>();

	// loop through characters
	for (let i: number = 0; i < s.length; i++) {
		map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1);
		map.set(t.charAt(i), (map.get(t.charAt(i)) || 0) - 1);
	}

	for (const value of map.values()) {
		if (value !== 0) return false;
	}

	return true;
}
// @lc code=end
