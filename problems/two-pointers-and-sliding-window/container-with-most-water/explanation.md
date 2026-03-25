# Container With Most Water
🟠 Medium 

Patterns: Nested Loops, Bidirectional Pointers.
## Problem
For a given array ```height``` consisting of integers, suppose for each index ```i```, a vertical line of height ```height[i]``` is drawn from the x-axis. For any two lines, a container can be formed between them and the x-axis. Find the two lines that maximize the amount of water stored in this container.

**Note:** The container cannot be slanted.

## Constraints
- ```2 <= n <= 105```
- ```0 <= height[i] <= 104```
## Examples
```
height = [1,8,6,2,5,4,8,3,7]
output = 49
```
![Example](/documentation/images/cwmw.png)

The container that holds the most water is between lines with indices 0 and 8. Since the container cannot be slanted, the area of the water is $7 \times 7 = 49$.
```
height = [2,3,4,5,18,17,6]
output = 17
```


The maximum area is $17$ which is found between lines with indices 4 and 5. Note that although this is the smallest width possible, the chosen lines are sufficiently higher than the others to outweigh this.
## Intuition
This problem is essentially asking 'Find the two indices that maximize width x height, where width is the difference of the indices, and height is the minimum value in the array at the two indices. As with most array optimization problems, an obvious but inefficient solution is to simply check all pairs of indices, and keep track of the largest area found. A strategy to reduce the algorithm's complexity can be found by making note of a key insight: For any given pair of lines, moving the taller line inward cannot increase the area. This is because the width decreases, while the height remains limited by the shorter line.

Therefore, to potentially find a larger area, we must move the pointer at the smaller height. This leads to a two-pointer strategy where both pointers start at the ends of the array and converge inward.

## Brute Force Approach
The brute force solution checks all pairs of lines and computes the area for each pair. The maximum area is updated whenever a larger value is found.

```javascript
for (let i=0; i<n; i++){
    for (let j=i+1; j<n; j++){
        const currArea = getArea(height, i, j)
        maxArea = Math.max(currArea, maxArea)
    }    
}  
```

*Example:*

For ```height = [1,14,15,6]```, the algorithm checks all valid pairs of left and right lines:
| Pair Indices| Width | Height | Area |
| :----: | :----: | :---: | :----: |
| (0,1) | 1 | 1 | 1 |
| (0,2) | 2 | 1 | 2|
| (0,3) | 3 | 1 | 3
| (1,2) | 1 | 14 | 14 |
| (1,3) | 2 | 6 |12 |
| (2,3) | 1 | 6 |6 |

The maximum area is 14 and is found with left index 1 and right index 2.

**Complexity:**

If $n$ is the length of the ```height``` array, then at each left line $k$ (0-indexed), we check all right lines from $k$ to $n-1$, so the number of iterations is:

$$
\sum_{k=0}^{n-1} (n-k) = \sum_{k=0}^{n-1} n - \sum_{k=0}^{n-1} k = n^2 - \frac{n(n-1)}{2} = \frac{n(n+1)}{2}
$$

Only a constant number of variables are used, so the space complexity is O(1).

- **Time Complexity:** $\text{O}(n^2)$
- **Space Complexity:** $\text{O}(1)$


## Optimized Approach
A more optimized solution is based on a bidirectional two pointers algorithm. The lines are initially set to the two end points of the array and the initial area is calculated. The following steps are performed iteratively until the two lines are adjacent:

- If the lines are unequal in height, move the smaller line inward by 1.
- If the lines are equal in height, move either inward by 1.
- Calculate the new area and update the max area found so far.

Since the area is limited by the smaller height, moving the larger height inwards would decrease the width without any increase in height. Therefore, the algorithm skips suboptimal pairs, while the two lines converge inwards until all relevant candidates have been considered. 

```javascript 
while (left < right - 1){
    if (height[left] <= height[right]){
        left++
    } else {
        right--
    }
    const currArea = getArea(height, left, right)
    bestArea = Math.max(currArea, bestArea)
}
```
*Example:*

For ```height = [1,14,15,6]```, the algorithm checks the following pairs and areas:

| Heights | Width | ```currArea``` | ```bestArea``` |
| :----: | :----: | :---: |  :---: |
| (1,6) | 3 | 3 | 3
| (14,6) | 2 | 12 | 12
| (14,15) | 1 | 14 | 14


**Complexity:** The loop continues while the two pointers do not meet. Since each step moves at least one pointer inward, the total number of iterations is at most n.

Only a constant number of variables are used, so the space complexity is O(1).


- **Time Complexity:** $\text{O}(n)$
- **Space Complexity:** $\text{O}(1)$

## Comparison
Feature | Brute Force | Optimized |
| :----: | :-----: | :------: |
Time Complexity | $\text{O}(n^2)$  |$\text{O}(n)$  |
Space Complexity | $\text{O}(1)$ |$\text{O}(1)$ |
Technique | Nested Loops | Bidirectional Pointers |
Key Insight | Check all valid pairs explicitly  | Moving the smaller height is the only way to potentially increase area |
Passes | Two nested passes  |  Single pass
Pattern | Exhaustive search | Greedy / Two Pointers |
Decision Rule | Evaluate all pairs | Move pointer at smaller height

## Edge Cases

The following edge cases should be considered:

- Minimum input size (n = 2): The area is simply the minimum of the two heights. Both approaches handle this correctly, with the optimized solution computing the result in a single iteration.

- All heights are zero: No container can hold water, so the maximum area is 0. Both algorithms handle this naturally without requiring special logic.

