import {React, useRef} from 'react'
import { Container, MenuWrapper, Section } from './style';
import { Input, Button } from '../Generics';
import { Icons } from '../Generics/Button/style';
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import useSearch from '../../hooks/useSearch';
import { useLocation, useNavigate } from 'react-router-dom';

export const Filter = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    let replace = uzeReplace(name, value);
    navigate(`${location?.pathname}${replace}`);
  };


  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Address</h1>
      <Section>
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
          defaultValue={query.get('address')}
          ref={cityRef}
          name='address'
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
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} width={150} />
        <Input ref={sizeRef} placeholder={"Size"} width={150} />
        <Input ref={sortRef} placeholder={"Sort"} width={150} />
      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder={"Min price"}  width={150} />
        <Input ref={maxPriceRef} placeholder={"Max price"} width={150}  />
      </Section>
      <h1 className='subTitle'>Footer</h1>
      <Section>
        <Button typeBtn={"light"}>Cancel</Button>
        <Button>Submit</Button>
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