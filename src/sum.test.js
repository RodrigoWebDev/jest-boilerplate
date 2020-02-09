import sum from "./sum"

test(" sum(1,2) should return 3 ", () => {
    expect(sum(1,2)).toBe(3)
})

test(" sum(1,2) should not return 4 ", () => {
    expect(sum(1,2)).not.toBe(4)
})