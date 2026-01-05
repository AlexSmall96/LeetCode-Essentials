import { test, expect } from 'vitest'
import { groupAnagrams } from './solution.ts'

// Helper function to make assertions on complex cases
const expectCorrectGroups = (input: string[], groups: string[][]) => {
    const output = groupAnagrams(input)
    groups.map(group => 
        expect(output).toContainEqual(expect.arrayContaining(group))
    )
    expect(output).toHaveLength(groups.length)
}

// Tests 

test('Single element array returns one group.', () => {
    const inputs = ['a', 'ab', 'abc']
    inputs.map(input => expect(groupAnagrams([input])).toEqual([[input]]))
})

test('Strings of equal length but different letters are grouped correctly.', () => {
    expectCorrectGroups(
        ["eat","tea","tan","ate","nat","bat"],
        [["bat"],["nat","tan"],["ate","eat","tea"]]
    )
    expectCorrectGroups(
        ['abc', 'cba', 'def', 'fed', 'dfe', 'hij', 'hji'],
        [['abc', 'cba'], ['def', 'fed', 'dfe'], ['hij', 'hji']]
    )
    expectCorrectGroups(
        ['car', 'dog', 'god', 'rac', 'app', 'paa', 'ppa'],
        [['car', 'rac'], ['dog', 'god'], ['app', 'ppa'], ['paa']]
    )
})

test('Array containing strings with same letters but some of unequal length are grouped correctly.', () => {
    expectCorrectGroups(
        ['aabbcc', 'aaabbbccc'],
        [['aabbcc'], ['aaabbbccc']]
    )
    expectCorrectGroups(
        ['aabbcc', 'aaccbb', 'aaccbc'],
        [['aabbcc', 'aaccbb'], ['aaccbc']]
    )
    expectCorrectGroups(
        ['abbbb', 'aaaab'],
        [['abbbb'], ['aaaab']]
    )
    expectCorrectGroups(
        ['aaaa', 'aaaaa'],
        [['aaaa'], ['aaaaa']]
    )
})

test('Array containing empty strings are grouped correctly.', () => {
    expectCorrectGroups(['', ''], [['']])
    expectCorrectGroups(['abc', '', 'a'], [['abc'], [''], ['a']])
})