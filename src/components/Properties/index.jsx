import React, { useState, useEffect } from 'react';
import { Container } from "./style";
import { HouseCard } from '../HouseCard';
import { apartments } from '../../mock/apartments';
import useSearch from '../../hooks/useSearch';
// import { useLocation } from 'react-router-dom';
// const {REACT_APP_BASE_URL: url} = process.env;

const Properties = () => {

    const query = useSearch();

    const [filteredData, setFilteredData] = useState(apartments);
    
    const [filterAttr, setFilterAttr] = useState({
        country: query?.get('country'),
        region: query?.get('region'),
        city: query?.get('city'),
        zip_code: query?.get('zip_code'),
        rooms: query?.get('rooms'),
        area: query?.get('size'),
        category_id: query?.get('category_id'),
        minPrice: query?.get('min_price'),
        maxPrice: query?.get('max_price'),
    });

    // useEffect(() => {
    //     setFilterAttr((prev) => ({ 
    //         ...prev,
    //         country: query?.get('country'),
    //         region: query?.get('region'),
    //         city: query?.get('city'),
    //         zip_code: query?.get('zip_code'),
    //         rooms: query?.get('rooms'),
    //         area: query?.get('size'),
    //         category_id: query?.get('category_id'),
    //         minPrice: query?.get('min_price'),
    //         maxPrice: query?.get('max_price'),
    //     }))
    // }, [query])

    console.log("query", query);

    // function setFilter() {
    //     setFilteredData(apartments.filter(e => e.country?.toLowerCase().includes(filterAttr.country?.toLowerCase()))
    //     .filter(e => e.region?.toLowerCase().includes(filterAttr.region?.toLowerCase()))
    //     .filter(e => e.city?.toLowerCase().includes(filterAttr.city?.toLowerCase()))
    //     .filter(e => e.zip_code?.toLowerCase().includes(filterAttr.zip_code?.toLowerCase())));
    // }

    console.log(filterAttr.country);

    return (
        <Container>
            {/* {
                filteredData.filter(e => e.country?.toLowerCase().includes(filterAttr.country?.toLowerCase())).map((item) => {
                    return <HouseCard data={item} key={item.id} />
                })
            } */}
        </Container>
    )
}

export default Properties