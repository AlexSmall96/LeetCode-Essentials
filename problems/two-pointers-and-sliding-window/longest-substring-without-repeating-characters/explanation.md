# Longest Substring Without Repeated Characters
Difficulty: 🟠 Medium

Patterns: Sliding Window with Set
## Problem
Given a string ```s```, find the longest substring without duplicate characters.
## Constraints
- ```0 <= s.length <= 5 * 104```
- ```s``` consists of English letters, digits, symbols, and spaces.
## Examples
#### Example 1
```
s = "abcabcbb"
output = 3
```
The substrings ```"abc"```, ```"bca"```, and  ```"cab"``` are all the longest, valid answers with length 3.
#### Example 2
```
s = "bbbbb"
output = 1
```
Since there is only one unique character in the string, the answer is 1.
#### Example 3
```
s = "tmmzuxt"
output = 5
```
The substring ```"mzuxt"``` has length 5 and contains no duplicates.
## Intuition
A suitable approach to this problem would be to maintain a sliding window of substrings, along with a set to keep track of which characters are currently 'taken'. We can use the set to determine whether to expand or shrink the window, keeping track of the longest valid window found so far.


- If the next character on the right is already in the window, we shrink the window from the left until it contains only unique characters again.
- If the next character on the right is not in the window, we expand the window from the right.


This approach guarantees all valid substrings are found because:
- Every character is considered the end of a potential substring exactly once.
- The left pointer moves forward to remove duplicates, ensuring the window isn't expanding while duplicates are present.
- No substring is missed that could be longer than the current maximum.


Since each character is added and removed from the set at most once, the total number of operations is at most 2n.


### Psuedo-Code
The following pseudo-code implements this intuition in a more structured way:
```
Initialize set
Initialize max length
left = 0


for character in string:
    while character is in set:
        remove string[left] from set
        increment left
   
    add character to set
    update max length


return max length
```
## Solution
The solution is implemented formally by initializing the ```left``` to 0, the ```longestWindow``` to 1, and an empty set ```windowSet```. We loop through the array with ```right``` and perform the following sequence:
- If ```character = s[right]``` is currently in the set, remove the left pointer from the set and increment ```left```. Repeat until ```character``` is not in the set.
- Add ```character``` to the set, and update ```longestWindow```.


```javascript
for (let right=0; right<n; right++){
    const character = s[right]
    let invalid = windowSet.has(character)
    // Shrink the window from left until it becomes valid again
    while (invalid){
        windowSet.delete(s[left])
        left++
        invalid = windowSet.has(character)
    }
    // Expand window from right and update longest window found so far
    windowSet.add(character)
    longestWindow = Math.max(longestWindow, right - left + 1)
}
```
*Example*


For `s = "pwwkew"`:


| ```left```| ```right``` | ```windowSet``` | window | length | ```longestWindow``` |
| :--: | :---: | :-------: | :----: | :----: | :-----: |
| 0 | 0 | {p} | "p" | 1 | 1 |
| 0 | 1 | {p,w} | "pw" | 2 | 2 |
| 1 | 2 | {w} | "w" | 1 | 2 |
| 2 | 2 | {w} | "w" | 1 | 2 |
| 2 | 3 | {w,k} | "wk" | 2 | 2 |
| 2 | 4 | {w,k,e} | "wke" | 3 | 3 |
| 3 | 5 | {k,e,w} | "kew" | 3 | 3 |


At ```right = 2```, a duplicate 'w' is encountered. The window is shrunk from the left until the duplicate is removed.


**Complexity:**


Since the right pointer moves from 0 to n-1, and the left pointer only moves forward at most n steps in total, the total number of moves is bounded by $n + n = 2n$. The size of the set is bounded by $n$. Therefore:


- Time Complexity: $O(n)$
- Space Complexity: $O(n)$


## Summary
- **Technique:** Sliding Window with Set
- **Decision Rule:** Shrink window from the left while the current character is already in the set, otherwise expand to the right.
- **Passes:** Single pass (each pointer moves forward at most n times)
- **Patterns:** Sliding window, Two Pointers
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$


## Edge Cases and Minimal Scenarios
The solution handles both of the following scenarios naturally without explicit checks:
- Empty string should return 0; no iterations are performed, so the initial value of ```longestWindow``` is returned.
- Single character string should return 1; a single iteration is performed with no duplicates found, so the value of ```longestWindow``` is set to 1 and then returned as the answer.


