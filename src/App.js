import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import SHOW from './show.jpeg';
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
            <h1 className={"header"}>
                NEAR SHARK NFT
            </h1>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
            <img src={SHOW} style={{width: '100%'}}/>
        </Col>
        <Col span={16}>
            <div className={"desc"}>
                <h1>WHAT IS NEAR SHARK ?</h1>
                <p>
                    Near shark nft is an AI generated NFT with various types of unique sharks in the near protocol.
                    <br/>
                </p>
                <h1>ROADMAP</h1>
                <ul>
                    <li>Spread Near Shark News</li>
                    <li>Register Paras, Website and Building Social Media</li>
                    <li>Minting</li>
                    <li>Build DAO</li>
                    <li>Creating Donation Event</li>
                    <li>Create Another Roadmap</li>
                </ul>
                <h1>MINTING PRICE</h1>
                <h2>2 NEAR PER NFT</h2>
                <Button type="primary" onClick={()=>{
                    location.href='https://paras.id/nearshark.near/creation'
                }}>BUY/MINT NFT</Button> &nbsp;
                <Button type="primary" onClick={()=>{
                    location.href='https://discord.gg/VFVPk7Uv4e'
                }}>DISCORD</Button> &nbsp;
                <Button type="primary" onClick={()=>{
                    location.href='https://twitter.com/nearshark_near'
                }}>TWITTER</Button> &nbsp;
            </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
