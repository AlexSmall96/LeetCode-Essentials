/** Hash Map with canonical string representation
 * Time: O(n x k), Space O(n x k), where n is the number of strings and k is the maximum string length
 */
export var groupAnagrams = function(strs: string[]) {
    const groups: {[stringRep: string]: string[]} = {}
    for (let str of strs){
        const rep = new Array(26).fill(0);
        for (let char of str){
            const code = char.charCodeAt(0) - 97
            rep[code]++
        }
        const stringRep = rep.join('#')
        if (!(stringRep in groups)){
            groups[stringRep] = [str]
        } else {
            groups[stringRep].push(str)
        }
    }
    return Object.values(groups)
};