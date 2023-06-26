import React, {useEffect, useState} from 'react';
import { Container } from "./style";
import { HouseCard } from '../HouseCard';

const {REACT_APP_BASE_URL: url} = process.env;

const Properties = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${url}/houses/list`)
            .then(res => res.json())
            .then(res => {
                setData(res?.data)    
            })
    }, [])

return (
        <Container>
            {
                [1,2,3,4,5,6,7,8].map((_, index) => {
                    return <HouseCard child={index}/>
                })
            }
        </Container>
    )
}

export default Properties