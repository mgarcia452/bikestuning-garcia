import { stock } from "../data/Data";

export const getData = () => {
    // const error = false;

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve(stock)
            !"" ? resolve(stock) : reject(alert("error"));
        }, 1000)
    } )
}