import { React, useRef, useState, useEffect } from 'react'
import { QUERY_TYPE } from '../../utils/types';
import { Container, MenuWrapper, Section, Div, SelectAnt } from './style';
import { useContext } from 'react';
import { PropertiesContext } from "../../context/properties"
import { Input, Button } from '../Generics';
import { Icons } from '../Generics/Button/style';
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import useSearch from '../../hooks/useSearch';
import { useLocation, useNavigate } from 'react-router-dom';
import { categoryList } from '../../mock/category';
// import { apartments } from '../../mock/apartments';
export const Filter = () => {

  const [state, dispatch] = useContext(PropertiesContext);

  console.log("state", state)

  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const [valueCategory, setValueCategory] = useState('Select Category');

  const onChange = ({ target: { name, value } }) => {

    dispatch({ type: QUERY_TYPE, payload: { type: name } })

    let replace = uzeReplace(name, value);
    navigate(`${location?.pathname}${replace}`);
  };

  useEffect(() => {
    let [d] = categoryList?.filter(
      (ctg) => ctg.id === Number(query.get('category_id'))
    );
    d?.name && setValueCategory(d?.name);
    !query.get('category_id') && setValueCategory('Select Category');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, categoryList]);


  const onChangeCategory = (category_id) => {

    dispatch({ type: QUERY_TYPE, payload: { type: "category_id" } })

    navigate(`/properties${uzeReplace('category_id', category_id)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Address</h1>
      <Section grid>
        <Input
          defaultValue={query.get('country')}
          onChange={onChange}
          ref={countryRef}
          name='country'
          placeholder='Country'
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('region')}
          ref={regionRef}
          name='region'
          placeholder='Region'
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('city')}
          ref={cityRef}
          name='city'
          placeholder='City'
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('zip_code')}
          name='zip_code'
          ref={zipRef}
          placeholder='Zip Code'
        />
      </Section>
      <h1 className='subTitle'>Apartment info</h1>
      <Section grid>
        <Input onChange={onChange} defaultValue={query.get('rooms')} name="rooms" ref={roomsRef} placeholder={"Rooms"} width={150} />
        <Input onChange={onChange} defaultValue={query.get('size')} name="size" ref={sizeRef} placeholder={"Size"} width={150} />

        <SelectAnt value={valueCategory} onChange={onChangeCategory}>
          <SelectAnt.Option value={''}>Select Category</SelectAnt.Option>
          {categoryList.map((value) => {
            return (
              <SelectAnt.Option key={value.id} value={value?.id}>
                {value?.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>

      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section grid>
        <Input onChange={onChange} defaultValue={query.get('min_price')} name="min_price" ref={minPriceRef} placeholder={"Min price"} width={150} />
        <Input onChange={onChange} defaultValue={query.get('max_price')} name="max_price" ref={maxPriceRef} placeholder={"Max price"} width={150} />
      </Section>

      <Section>
        <Div>
          <Button typeBtn={"light"}>Cancel</Button>
          <Button>Submit</Button>
        </Div>
      </Section>
    </MenuWrapper>
  )

  return (
    <Container>
      <Input icon={<Icons.Houses />} placeholder={"Enter an address, ZIP code"} />
      <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger='click'
      >
        <div>
          <Button typeBtn={"light"}>
            <Icons.Setting />
            Advanced</Button>
        </div>
      </Dropdown>
      <Button typeBtn={"primary"}>
        <Icons.Search />
        Search</Button>

    </Container>
  )

}

export default Filter