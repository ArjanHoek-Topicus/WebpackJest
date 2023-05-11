import { forEach } from ".";

it("mock callback", () => {
    const mockedCallback = jest.fn((x) => 10 + x);

    forEach([0, 5], mockedCallback);

    expect(mockedCallback.mock.calls.length).toBe(2);

    expect(mockedCallback.mock.calls[0][0]).toBe(0);

    expect(mockedCallback.mock.results[0].value).toBe(10);
    expect(mockedCallback.mock.results[1].value).toBe(15);
});

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce("first call result")
        .mockReturnValueOnce("second call result")
        .mockReturnValue("default result");

    expect(mock()).toBe("first call result");
    expect(mock()).toBe("second call result");
    expect(mock()).toBe("default result");
});
