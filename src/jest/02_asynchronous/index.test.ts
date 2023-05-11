import { fetchData } from ".";

// Use the then. method
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

// Combine async/await with .resolves
test("the data is peanut butter", async () => {
    await expect(fetchData("fruits")).resolves.toContain("banana");
});

// Combine async/await with .rejects
test("the fetch fails with an error", async () => {
    await expect(fetchData("cars")).rejects.toMatch(
        "No data found of type cars"
    );
});
