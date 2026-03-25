// Solution 1: Brute force nested loops
// Time O(n^2), Space O(1)
// Solution 2: Running minimum
// Time O(n), Space O(1)

/**
 * Brute force nested loops
 * Time O(n^2), Space O(1)
 */
export function nestedLoops(prices: number[]): number {
    let max = 0

    const n = prices.length

    for (let i=0; i<n; i++){
        for (let j=i+1; j<n; j++){
            const profit = prices[j] - prices[i]
            if (profit > max){
                max = profit
            }
        }
    }    

    return max
};

/**
 * Running minimum
 * Time O(n), Space O(1)
 */
export function runningMin(prices: number[]): number {
    if (prices.length === 0) return 0
    
    let minPrice = prices[0]
    let bestProfit = 0
    let bestProfitToday = 0

    prices.forEach((price) => {
        bestProfitToday = price - minPrice
        minPrice = Math.min(price, minPrice)
        bestProfit = Math.max(bestProfit, bestProfitToday)
    })

    return bestProfit

};