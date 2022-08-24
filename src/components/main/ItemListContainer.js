import { Item } from './Item'

export const ItemListContainer = () => {

    const items = [
        { id: 1, type: 'intake', part: 'filter', hp: 1.02, price: 600 },
        { id: 2, type: "intake", part: "funnel", hp: 1.02, price: 80 },
        { id: 3, type: "intake", part: "ram", hp: 1.05, price: 300 },
        { id: 4, type: "exhaust", part: "muffler", hp: 1.02, price: 1000 },
        { id: 5, type: "exhaust", part: "full-system", hp: 1.10, price: 1750 },
        { id: 6, type: "ecu", part: "stage1", hp: 1.05, price: 300 },
        { id: 7, type: "ecu", part: "stage2", hp: 1.12, price: 450 },
        { id: 8, type: "fuel", part: "inyectors", hp: 1.03, price: 1200 },
        { id: 9, type: "fuel", part: "pump", hp: 1.01, price: 400 },
        { id: 10, type: "camshaft", part: "street", hp: 1.08, price: 300 },
        { id: 11, type: "camshaft", part: "racing", hp: 1.12, price: 500 },
        { id: 12, type: "polish", part: "port", hp: 1.03, price: 700 },
        { id: 13, type: "polish", part: "head", hp: 1.05, price: 1000 },
        { id: 14, type: "turbo", part: "stage1", hp: 1.25, price: 8000 },
        { id: 15, type: "turbo", part: "stage2", hp: 1.38, price: 14000 },
        { id: 16, type: "crank", part: "crank", hp: 1.8, price: 6500 }

    ]
    return (
        <div>
            <Item producto={items[0]} />
            <Item producto={items[1]} />
            <Item producto={items[2]} />
            <Item producto={items[3]} />
            <Item producto={items[4]} />
            <Item producto={items[5]} />
            <Item producto={items[6]} />
            <Item producto={items[7]} />
            <Item producto={items[8]} />
            <Item producto={items[10]} />
            <Item producto={items[11]} />
            <Item producto={items[12]} />
            <Item producto={items[13]} />
            <Item producto={items[14]} />
            <Item producto={items[15]} />
        </div>
    )

}