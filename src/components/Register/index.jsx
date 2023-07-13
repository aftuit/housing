import { AntTabs, Container } from "./style";
import Signin from "../Signin";
import Signup from "../Signup";
import { PropertiesContext } from "../../context/properties";
import { TAB_TYPE } from "../../utils/types";
import { useContext } from "react";
export const Register = () => {


  const onChange = (key) => {
    dispatch({type: TAB_TYPE, payload: {tab: key}})
  };

  const [state, dispatch] = useContext(PropertiesContext);
  const tabs = [
    {
      label: `Sign in`,
      key: "1",
      children: <Signin/>,
    },
    {
      label: `Sign up`,
      key: "2",
      children: <Signup/>,
    },
  ]

  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        activeKey={state.tabKey}
        items={tabs}
        onChange={onChange}
      />
    </Container>
  );
};

export default Register;