/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Wrapper, MenuWrapper, Section, SelectAnt, ImgItem, ImgDelete, Btn, ButtonAnt } from "./style";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generics";
import { Checkbox, message } from "antd";
import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";

export const AddNewHouse = ({
  handleCancel,
  id,
  imgs,
  setImgs,
  initial,
  
  refetch
}) => {



  const [category, setCategory] = useState([]);
  const [ctg, setCtg] = useState("Select Category");
  const [img, setImg] = useState("");
  const [pending, setPending] = useState(0);

  const request = useRequest();

  // single house


  // category
  useEffect(() => {
    request({ url: `/v1/categories/list` }).then((res) =>
      setCategory(res?.data || [])
    );
  }, []);

  const formik = useFormik({
    initialValues: initial,
    // initialValues: {},
    enableReinitialize: true,
    onSubmit: (values) => {
      setPending(1);
      request({
        url: id ? `/v1/houses/${id}` : `/v1/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          categoryId: ctg,
          location: {longitude: 41.3066818624728, latitude: 69.23364249871777},
          attachments: imgs,
        },
      }).then((res) => {
        if (res?.success) {
          id?
            message.success("successfully updated!"):
            message.success("successfully added apartment!");
          handleCancel();
          refetch();
        };
      }).finally(() => {
        setPending(0);
      });
    },
  });

  const addImg = () => {

    if(img) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}$` },
      ]);
      setImg("");
    }
  };

  const removeImg = (id) => {
      let res = imgs.filter((vl) => vl.id !== id);
      setImgs(res);
  }


  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit} id="add-house-form">
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              name="country"
              value={formik.values?.country ?? ""}
              placeholder="Country"
              onChange={formik.handleChange}
            />
            <Input
              onChange={formik.handleChange ?? ""}
              name="region"
              value={formik.values?.region}
              placeholder="Region"
            />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values?.city ?? ""}
              placeholder="City"
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values?.address ?? ""}
              placeholder="Address"
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section flex>
            <div>
              <Section>
                <Input
                  type="number"
                  name="houseDetails.area"
                  value={formik.values.houseDetails?.area ?? ""}
                  onChange={formik.handleChange}
                  placeholder="area"
                />
                <Input
                  type="number"
                  name="houseDetails.bath"
                  value={formik.values.houseDetails?.bath ?? ""}
                  onChange={formik.handleChange}
                  placeholder="bath"
                />
                <Input
                  type="number"
                  name="houseDetails.beds"
                  value={formik.values.houseDetails?.beds ?? ""}
                  onChange={formik.handleChange}
                  placeholder="beds"
                />
                <Input
                  type="number"
                  name="houseDetails.garage"
                  value={formik.values.houseDetails?.garage ?? ""}
                  onChange={formik.handleChange}
                  placeholder="garage"
                />
              </Section>
            </div>
            <div>
              <Section grid>
                <Input
                  type="number"
                  name="houseDetails.yearBuilt"
                  onChange={formik.handleChange}
                  placeholder="yearbuilt"
                  value={formik.values.houseDetails?.yearBuilt ?? ""}
                  width={150}
                />
                <Input
                  type="number"
                  value={formik.values.houseDetails?.room ?? ""}
                  name="houseDetails.room"
                  onChange={formik.handleChange}
                  placeholder="room"
                  width={150}
                />
                <SelectAnt
                  defaultValue={"Select Category"}
                  value={ctg}
                  onChange={(val) => {setCtg(val)}}
                  width={150}
                >
                  <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
                  {category.map((value) => {
                    return (
                      <SelectAnt.Option key={value.id} value={value?.id}>
                        {value?.name}
                      </SelectAnt.Option>
                    );
                  })}
                </SelectAnt>
              </Section>
            </div>
          </Section>

          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              value={formik.values?.name ?? ""}
              name="name"
              onChange={formik.handleChange}
              placeholder="Name"
            />
            <Input
              value={formik.values.zipCode ?? ""}
              name="zipCode"
              onChange={formik.handleChange}
              placeholder="Zip Code"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price ?? ""}
              placeholder="Price"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice ?? ""}
              placeholder="Sale price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Btn onClick={addImg} type="primary">
              Add
            </Btn>
          </Section>
          <Section wrap = "true">
            {imgs.map((value) => {
              return (
                <ImgItem key={value?.id}>
                  {<img src={value?.imgPath} width={100} height={100} />}{" "}
                  <ImgDelete
                    onClick={() => removeImg(value?.id)}
                  />
                </ImgItem>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              value={formik.values.description}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>

          <Section gap>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.statium"
              >
                Stadium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                Super Market
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                TV
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.airCondition"
              >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.gas">
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Section end="true">
            <Btn onClick={handleCancel} type={'light'}>Cancel</Btn>
            <ButtonAnt type="submit" htmlType="submit" loading={pending}>{id ? "Update" : "Save"}</ButtonAnt>
          </Section>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;