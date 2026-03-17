# Best Time to Buy and Sell Stock
Difficulty: 🔵 Easy


Patterns: Nested Loops, Unidirectional Pointers.
## Problem
Given an array ```prices``` where ```prices[i]``` is the price of a given stock on the ith day, find the maximum profit that can be made by buying and selling once. You must sell after you buy. If no profit can be made, the returned answer should be 0.


## Constraints
```javascript
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104
```


## Examples
```javascript
prices = [7,1,5,3,6,4]
output = 5
```
**Explanation:** Buy on day 2 and sell on day 5. The maximum difference is between days 1 and 2, but this is not valid because you must buy before you sell.
```javascript
prices = [2,7,1,4]
output = 5
```
**Explanation:** Buy on day 1 and sell on day 2.
```javascript
prices = [7,6,4,3,1]
output = 0
```
**Explanation:** The prices are arranged in a strictly descending order; no profit can be made.


## Intuition
This problem can be rephrased as 'Find the largest difference where the smaller number comes first'. With this goal in mind, the most obvious solution is to check all pairs using a nested loop and keep track of the best profit found so far. This approach is slow and involves unnecessary computations. We can reduce complexity by noticing that if we are to sell on any given day, the best time to buy would have been the minimum price found so far. Therefore, keeping a running minimum as we traverse the prices array and comparing the current day's profit to the best profit found so far is the better and faster approach.


## Brute Force Approach
The naive solution involves checking all pairs and finding the maximum profit. The profit is initially set to 0, we traverse the array with 2 nested loops, one as the buy day, and one beginning the day after as the sell day. For each pair, we compare the current profit to the maximum found so far and update the maximum if it is higher.


```javascript
for (let i=0; i<n; i++){
    for (let j=i; j<n; j++){
        const profit = prices[j] - prices[i]
        if (profit > max){
            max = profit
        }
    }
}  
```


*Example:*


For ```prices = [2,7,1,4]```, the algorithm checks all valid (buy, sell) pairs:
| Pair Indices| Buy | Sell | Profit |
| :----: | :----: | :---: | :----: |
| (0,1) | 2 | 7 | 5 |
| (0,2) | 2 | 1 | -1 |
| (0,3) | 2 | 4 | 4
| (1,2) | 7 | 1 | -6 |
| (1,3) | 7 | 4 |-3 |
| (2,3) | 1 | 4 |3 |


The maximum profit found is 5 (buy on day 0, sell on day 1).


**Complexity:**


If $n$ is the length of the ```prices``` array, then at each buy day $k$ (0-indexed), we check all sell days from $k$ to $n-1$, so the number of iterations is:


$$
\sum_{k=0}^{n-1} (n-k) = \sum_{k=0}^{n-1} n - \sum_{k=0}^{n-1} k = n^2 - \frac{n(n-1)}{2} = \frac{n(n+1)}{2}
$$


This method only requires a single variable, ```profit```, so it has constant space complexity. Therefore, we have:


- **Time Complexity:** $\text{O}(n^2)$
- **Space Complexity:** $\text{O}(1)$


## Optimized Approach
The optimized solution involves a running minimum buying price, and passing through the ```prices``` array once. This is achieved by tracking a minimum price ```minPrice```, initially set to the price of the first day. Each day:
- The current profit, ```bestProfitToday``` is computed, based on the current day's price and the minimum seen so far.
- The highest profit found, ```bestProfit```, is updated if a higher value is found.
- The minimum price is updated if a lower price is found.


Each day, the highest profit available depends only on the minimum price found before that day. Once the array has been traversed in one pass, the highest profit available is known, because we have calculated the best possible profit on each day.


```javascript
prices.forEach((price) => {
    bestProfitToday = price - minPrice
    minPrice = Math.min(price, minPrice)
    bestProfit = Math.max(bestProfit, bestProfitToday)
})
```


*Example:*


For ```prices = [2,4,1,5,8,4]```, starting at day 0, we initialize ```minPrice``` to 2, and ```bestProfit``` to 0.


| Day | Price | ```minPrice```| ```bestProfitToday``` | ```bestProfit```|
| :---: | :----: | :----------: | :---------------: | :--------------: |
| 1 | 4 | 2  |2  | 2
| 2 | 1 | 1 | 0 |  2
| 3 | 5 | 1 | 4 | 4
| 4 | 8 | 1 | 7 | 7
| 5 | 4 | 1 | 3 | 7


**Complexity:** The algorithm has $n$ iterations, one for each day. Each iteration performs 3 computations, and there are 3 variables being stored throughout the process.


- **Time Complexity:** $\text{O}(n)$
- **Space Complexity:** $\text{O}(1)$


## Comparison
Feature | Brute Force | Optimized |
| :----: | :-----: | :------: |
Time Complexity: | $\text{O}(n^2)$ | $\text{O}(n)$ |
Space Complexity: | $\text{O}(1)$ | $\text{O}(1)$ |
Technique: | Nested Loop | One pass with running minimum |
Key Insight: | Check all valid pairs explicitly | Track minimum price so far and compute profit greedily |
Passes: | Two nested passes | Single pass
Pattern: | Exhaustive search | Greedy / running minimum |


The key insight that allows the optimized approach to be performed in one pass is:


*The maximum profit on each day depends only on the minimum price seen before that day.*


## Edge Cases and No Profit Scenarios
There are 3 scenarios where a profit of 0 should be returned:
- Prices all equal.
- Prices all decreasing.
- Single element ```prices``` array.


Note that an empty array violates the problem constraints; however, if this was allowed, it would also return 0.
 
Both the brute force and optimal solutions handle these cases naturally without requiring explicit checks, since no positive profit is ever found.

