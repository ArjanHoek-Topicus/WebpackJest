import { fetchData } from ".";

// Returning a promise
test("the data contains grapes", async () => {
    return fetchData("fruits").then((data) => {
        expect(data).toContain("grapes");
    });
});

// Use async/await
test("the data contains grapes", async () => {
    const data = await fetchData("fruits");
    expect(data).toContain("grapes");
});

// Combine async/await with .resolves or .rejects
test("the data is peanut butter", async () => {
    await expect(fetchData("fruits")).resolves.toContain("banana");
});

test("the fetch fails with an error", async () => {
    await expect(fetchData("cars")).rejects.toMatch(
        "No data found of type cars"
    );
});
