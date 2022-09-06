import { stock } from "../data/Data";

export const getData = () => {
    // const error = false;

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
            // !error ? resolve(arrayProducts) : reject(alert("error"));
        }, 500)
    } )
}