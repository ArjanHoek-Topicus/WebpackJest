import axios from "axios";

export const forEach = (items: number[], callback: (num: number) => number) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
};

export const fetchUserById = (id: number) =>
    axios.get(`/users.json/${id}`).then((resp) => resp.data);
