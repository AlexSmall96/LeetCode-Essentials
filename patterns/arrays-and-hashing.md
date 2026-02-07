# Arrays and Hashing
 
## Core Ideas
Arrays and Hashing problems typically involve transforming ordered data
into an unordered structure (such as a set or hash map) to enable
constant-time lookups. The most common goal in this pattern is to take a problem that has an obvious "brute force" solution, often a nested loop (O(n^2) time) or sorting (O(n log n) time), and seek an algorithm that runs in O(n) time. This is often achieved by a single pass through the array, storing an intermediate state such as frequency or indices in the form of a hash map or set.
## When to Use This Pattern
This pattern often leads to an optimal solution when:
- Checking for duplicates or existence.
- Grouping elements by certain characteristics.
- Counting or comparing frequencies.
- Order does not matter.
- A brute force solution (eg, nested loops) results in excessive time complexity.
## Common Pitfalls
- Mutating the input array.
- Checking the existence of an element in an array (slower) as opposed to a set or a hash map.
- Using plain objects instead of Map when key type or ordering matters.
- Forgetting edge cases such as duplicates or empty/minimal input.
- Building a linear-time solution with an excessive number of constant-time operations.
## Complexity Patterns
- Most optimal solutions run in O(n) time.
- Achieving a linear solution often results in an intentional trade-off with increased space.
- A brute force solution often runs in O(n^2) time but with O(1) space complexity.
- When order matters, sorting may be required, resulting in an optimal solution in O(nlog(n)) time.
## Notes
- Optimal solutions to each of the 10 problems in this pattern are provided.
- Where applicable, some problems are accompanied by a brute-force/naive solution to demonstrate my reasoning process.
- If more than one solution to a problem is given, solutions are named based on the algorithm used (eg, nestedLoops, indexHashMap).
- If only one solution is given, it is named after the problem.
- All solutions have automated tests with a variety of inputs to cover standard and edge cases.
## Problems
[LeetCode Problem Set](https://leetcode.com/problem-list/v1xkqn3j/)


For each problem, the table provides concepts, difficulty, a link to the folder containing its solutions and tests, and a link to my LeetCode submission.


| Problem       | Concepts    | Difficulty |  Solution & Tests  |  LeetCode Submission |
|---------------|-------------|------------|--------------------|---------------------|
|Two Sum|Hash Map|🔵 Easy|[../problems/arrays-and-hashing/two-sum](../problems/arrays-and-hashing/two-sum)|[🔗](https://leetcode.com/problems/two-sum/submissions/1853018383/?envType=problem-list-v2&envId=v1xkqn3j)                 |
|Valid Anagram | Hash Map, Frequency Counts |   🔵 Easy          | [../problems/arrays-and-hashing/valid-anagram](../problems/arrays-and-hashing/valid-anagram)            |    [🔗](https://leetcode.com/problems/valid-anagram/submissions/?envType=problem-list-v2&envId=v1xkqn3j)            |                                     |
| Group Anagrams                | Hash Map, Canonical String Representation |🟠 Medium |[../problems/arrays-and-hashing/group-anagrams](../problems/arrays-and-hashing/group-anagrams)                   |   [🔗](https://leetcode.com/problems/group-anagrams/submissions/1911294126/?envType=problem-list-v2&envId=v1xkqn3j)           |
| Top K Frequent Elements | Bucket Sort, Frequency Groups | 🟠 Medium  | [../problems/arrays-and-hashing/top-k-frequent-elements](../problems/arrays-and-hashing/top-k-frequent-elements) | [🔗](https://leetcode.com/problems/top-k-frequent-elements/submissions/1911295129/?envType=problem-list-v2&envId=v1xkqn3j)
| Product of Array Except Self | Prefixes, Suffixes, Constant Space | 🟠 Medium |  [../problems/arrays-and-hashing/product-of-array-except-self](../problems/arrays-and-hashing/product-of-array-except-self)   |  [🔗](https://leetcode.com/problems/product-of-array-except-self/submissions/1911296039/?envType=problem-list-v2&envId=v1xkqn3j) |
|Contains Duplicate | Set Lookups | 🔵 Easy | [../problems/arrays-and-hashing/contains-duplicate](../problems/arrays-and-hashing/contains-duplicate) |  [🔗](https://leetcode.com/problems/contains-duplicate/submissions/1905309041/?envType=problem-list-v2&envId=v1xkqn3j)|
| Longest Consecutive Sequence | Set Lookups | 🟠 Medium  | [../problems/arrays-and-hashing/longest-consecutive-sequence](../problems/arrays-and-hashing/longest-consecutive-sequence) | [🔗](https://leetcode.com/problems/longest-consecutive-sequence/submissions/1911297792/?envType=problem-list-v2&envId=v1xkqn3j)| 
| Find All Anagrams in a String | Sliding Window, Frequency Counts | 🟠 Medium | [../problems/arrays-and-hashing/find-all-anagrams-in-a-string](../problems/arrays-and-hashing/find-all-anagrams-in-a-string) |[🔗](https://leetcode.com/problems/find-all-anagrams-in-a-string/submissions/1911298654/?envType=problem-list-v2&envId=v1xkqn3j) |
| Insert Interval | One pass, Flags | 🟠 Medium  | [../problems/arrays-and-hashing/insert-interval](../problems/arrays-and-hashing/insert-interval) | [🔗](https://leetcode.com/problems/insert-interval/?envType=problem-list-v2&envId=v1xkqn3j) | 
Merge Intervals | Sorting | 🟠 Medium  | [../problems/arrays-and-hashing/merge-intervals](../problems/arrays-and-hashing/merge-intervals) | [🔗](https://leetcode.com/problems/merge-intervals/submissions/1905318567/?envType=problem-list-v2&envId=v1xkqn3j)


