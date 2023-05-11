interface Data {
    [key: string]: string[];
}

const data: Data = {
    fruits: ["banana", "strawberry", "grapes"],
};

export const fetchData = (type: string) =>
    new Promise((resolve, reject) => {
        if (data[type]) {
            resolve(data[type]);
        } else {
            reject(`No data found of type ${type}`);
        }
    });
