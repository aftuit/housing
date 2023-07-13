import { AntTable, AntModal, Container, Icons, User, Wrapper } from "./style";
import { AddNewHouse } from "../AddHouse";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button } from "../Generics";
import noimg from "../../assets/img/noimg.jpeg";
import { useQuery } from "react-query";
import { message } from "antd";

import view from "../../assets/img/view.png"
import { useState } from "react";

export const MyProfile = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();
  const [id, setId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [initial, setInitail] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 0,
      longitude: 0,
    },
  });

  const getInitialValues = (data) => {
    setImgs([...data?.attachments]);
    setInitail(data);
  }


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {

console.log("handleCancel");


    setIsModalOpen(false);
    document.getElementById("add-house-form").reset();
    setId(null)
    setImgs([])
    setInitail({
      houseDetails: {},
      homeAmenitiesDto: {},
      componentsDto: {},
      status: true,
  
      locations: {
        latitude: 0,
        longitude: 0,
      },
    })
  };


  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/v1/houses/me`, token: true });
  });

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => {
        return (
          <User>
            <User.Img
              src={
                (data?.attachments && data?.attachments[0]?.imgPath) || noimg
              }
            />
            <User flex>
              <div className="subTitle">
                {data.country}, {data.address}
              </div>
              <div className="info">
                {data.city} {data.region}
              </div>
              <del>
                <div className="info">$ {data.price}</div>
              </del>
            </User>
            <div style={{ marginLeft: "auto" }}>
              <Button typeBtn={"light"} width={80} onClick={() => navigate(`/properties/${data?.id}`)}>
                <User.View src={view} alt="" />
              </Button>
            </div>
          </User>
        );
      },
    },
    {
      title: "Year Build",
      render: (data) => <span> {data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span> {data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span> $ {data.price}</span>,
      width: 150,
    },
    {
      title: <p className="text-center">Action</p>,
      key: "email",
      width: 100,
      render: (data) => {
        return (
          <>

            <User>
              <Icons.Edit
                onClick={() => {
                  setId(data.id);
                  getInitialValues(data)
                  showModal();
                }}
              />
              <Icons.Delete
                onClick={() => {
                  onDelete(data?.id);
                }}
              />
            </User>
          </>
        );
      },
    },
  ];

  const onDelete = (id) => {
    request({ url: `/v1/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    );
  };

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>
        <AntModal
          title="Create new apartment"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          centered={true}
        >
          <AddNewHouse
            imgs={imgs}
            setImgs={setImgs}
            initial={initial}
            setInitail={setInitail}
            id={id}
            handleCancel={handleCancel}
            isModalOpen = {isModalOpen}
            refetch={refetch}
          />
        </AntModal>
        <div style={{ marginLeft: "auto" }} className="title">
          <Button onClick={showModal}>
            Add House
          </Button>
        </div>
      </User>

      <Container>
        <AntTable
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;