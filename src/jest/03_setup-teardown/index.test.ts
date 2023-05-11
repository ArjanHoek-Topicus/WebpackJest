import { animals } from ".";

const arr: string[] = [];

const reseedData = (data: string[]) => {
    while (arr.length) arr.pop();
    data.forEach((d) => arr.push(d));
};

describe("animals array with reseeding data before each test", () => {
    // beforeAll(() => reseedData(animals));
    beforeEach(() => reseedData(animals));

    it("should add animal to end of array", () => {
        arr.push("aligator");
        expect(arr[arr.length - 1]).toBe("aligator");
    });

    it("should have initial length of 4", () => {
        expect(arr.length).toBe(4);
    });

    it("should add animal to beginning of array", () => {
        arr.unshift("monkey");
        expect(arr[0]).toBe("monkey");
    });
});

describe("animals array without reseeding data", () => {
    it("shifted animal should be monkey", () => {
        expect(arr.shift()).toBe("monkey");
    });
    it("first animal should be elephant", () => {
        expect(arr[0]).toBe("elephant");
    });
});
