// import { Spinner } from 'reactstrap';
import { useEffect, useState } from "react";
import { getData } from '../../helpers/getData'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getData()
    //         .then(res => {
    //             setData(res)
    //             // setLoading(false)
    //         })
    //         .catch(error => console.log(error))
    // }, []);


    // return (
    //     <div>
    //         <ItemList data={data} />
    //     </div>
    // )
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { partId } = useParams()
    // console.log(partId)

    useEffect(() => {
        setLoading(true)

        getData()
            .then( (res) => {
                if (!partId) {
                    setProducts(res)
                } else {
                    setProducts( res.find((prod) => prod.part === partId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [partId])


    return (
        <div>
            {
                loading 
                ? <h2>Loading...</h2>
                : <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer;