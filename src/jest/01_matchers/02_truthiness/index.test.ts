test("truthiness: null", () => {
    const x: null = null;

    expect(x).toBeNull();
    expect(x).toBeDefined();
    expect(x).not.toBeUndefined();
    expect(x).not.toBeTruthy();
    expect(x).toBeFalsy();
});

test("truthiness: zero", () => {
    const num: number = 0;

    expect(num).not.toBeNull();
    expect(num).toBeDefined();
    expect(num).not.toBeUndefined();
    expect(num).not.toBeTruthy();
    expect(num).toBeFalsy();
});

test("truthiness: one", () => {
    const num: number = 1;

    expect(num).not.toBeNull();
    expect(num).toBeDefined();
    expect(num).not.toBeUndefined();
    expect(num).toBeTruthy();
    expect(num).not.toBeFalsy();
});
