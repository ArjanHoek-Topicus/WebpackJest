import { sum, data, Person } from ".";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

// toBe is used to test exact equality

test("adds 1 + 2 to not equal 4", () => {
    expect(sum(1, 2)).not.toBe(4);
});

test("adds 1 + 2 to not equal '3' as a string value", () => {
    expect(sum(1, 2)).not.toBe("3");
});

test("object assignment", () => {
    (data as Person).profession = "Singer";
    expect(data).toEqual({ name: "John Torturro", profession: "Singer" });
});

// toEqual is used to recursively check every field of an object or array

test("object assignment changes object", () => {
    expect(data).not.toEqual({ name: "John Torturro", profession: "Actor" });
});

// keep in mind that manipulating an object in a test affects subsequent tests that use that same object
