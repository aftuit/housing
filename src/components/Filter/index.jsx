import {React, useRef} from 'react'
import { Container, MenuWrapper, Section } from './style';
import { Input, Button } from '../Generics';
import { Icons } from '../Generics/Button/style';
import { Dropdown } from 'antd';

export const Filter = () => {

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();


  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} width={150} />
        <Input ref={regionRef} placeholder={"Region"} width={150} />
        <Input ref={cityRef} placeholder={"City"} width={150} />
        <Input ref={zipRef} placeholder={"Zip code"} width={150} />
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