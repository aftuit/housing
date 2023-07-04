import React, { useState, useEffect, useContext } from 'react';
import { Container } from "./style";
import { HouseCard } from '../HouseCard';
import { apartments } from '../../mock/apartments';
import useSearch from '../../hooks/useSearch';
import { PropertiesContext } from '../../context/properties';
// import { useLocation } from 'react-router-dom';
// const {REACT_APP_BASE_URL: url} = process.env;

const Properties = () => {

    const [{ queryName }] = useContext(PropertiesContext)

    const query = useSearch();

    const [filteredData] = useState(apartments);

    const [filterAttr, setFilterAttr] = useState({
        country: query?.get('country') ?? "",
        region: query?.get('region') ?? "",
        city: query?.get('city') ?? "",
        zip_code: query?.get('zip_code') ?? "",
        rooms: query?.get('rooms') ?? "",
        area: query?.get('size') ?? "",
        category_id: query?.get('category_id') ?? "",
        min_price: query?.get('min_price') ?? "",
        max_price: query?.get('max_price') ?? "",
    });



    useEffect(() => {
        setFilterAttr((prev) => ({
            ...prev,
            [queryName]: query?.get([queryName]) ?? ""
        }))
    }, [query?.get([queryName])])

    console.log("query", query.category_id)
    console.log("filterAttr", filterAttr)

    return (
        <Container>
            {
                filteredData.filter(item => item.country.toLowerCase().includes(filterAttr.country.toLowerCase() ?? ""))
                    .filter(item => item.region.toLowerCase().includes(filterAttr.region.toLowerCase() ?? ""))
                    .filter(item => item.city.toLowerCase().includes(filterAttr.city.toLowerCase() ?? ""))
                    .filter(item => filterAttr.zip_code ? Number(item.zip_code) == Number(filterAttr.zip_code) : item)
                    .filter(item => filterAttr.rooms ? Number(item.houseDetails.room) == Number(filterAttr.rooms) : item)
                    .filter(item => filterAttr.size ? Number(item.size) == Number(filterAttr.size) : item)
                    .filter(item => filterAttr.category_id ? item.category.id == filterAttr.category_id : item)
                    .filter(item => filterAttr.min_price === "" && filterAttr.max_price === "" ? item : +filterAttr.min_price <= +item.price && +item.price <= +filterAttr.max_price)
                    .map((item) => {
                        return <HouseCard data={item} key={item.id} />
                    })
            }
        </Container>
    )
}

export default Properties