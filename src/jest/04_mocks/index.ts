export const forEach = (items: number[], callback: (num: number) => number) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
};
