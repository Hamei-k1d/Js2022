describe("hello world",() => {
    it("returns hello world", () => {
        var actual = hello()
        expect(actual).toBe("hello world");
    });
});
describe("Suma intregi",()=> {
    it("returns suma este 3", () => {
        expect(add(1,2)).toEqual(3);
    });
});
describe("Suma reale",() => {
    it("returns suma este 1.4 si 0.7=2.1", () => {
        expect(add(1.4,0.7)).toEqual(2.1);
    });
});
describe("Inmultire intregi",() => {
    it("returns inmultire 5 si 3=15", () => {
        expect(inm(5,3)).toEqual(15);
    });
});