import { fetchUserById, forEach } from ".";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockCallback = jest.fn((x) => x * 10);

test("mock callback", () => {
    forEach([1, 2], mockCallback);

    expect(mockCallback.mock.calls).toHaveLength(2);

    expect(mockCallback.mock.calls[0][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(10);
    expect(mockCallback.mock.results[1].value).toBe(20);
});

test("mock return", () => {
    const mock = jest.fn((x) => x * 10);

    mock.mockReturnValueOnce(1).mockReturnValueOnce(2);

    expect(mock(1)).toBe(1);
    expect(mock(2)).toBe(2);
    expect(mock(3)).toBe(30); // Return value will be the value return by the callback function defined above

    mock.mockReturnValue(100);

    expect(mock(3)).toBe(100); // Return value will be the value defined above
});

test("should fetch user", async () => {
    const user = { name: "Bob" };
    mockedAxios.get.mockResolvedValue({ data: user });

    const data = await fetchUserById(849);
    expect(data.name).toEqual("Bob");
});
