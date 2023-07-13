import { Container, Content, Icon } from './style';

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> Yangi Hayot tumani, Sergeli 2A-dom, 8-etaj, 40-hone,
          IT Academy
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone /> 998 95 012 50 10
        </Content.Item>
        <Content.Item>
          <Icon.Email /> <p>dsadadsadsds@gmail.com</p>
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>t.me/Farrux_Aktamov</Content.Item>
        <Content.Item>t.me/Aktamov</Content.Item>
        <Content.Item>instagram.com/Farrux_Aktamov</Content.Item>
        <Content.Item>facebook.com/Farrux_Aktamov</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;