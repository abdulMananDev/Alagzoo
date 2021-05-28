import "./App.css";

import MenuBar from "./MenuBar";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="menubar-container">
        <MenuBar />
      </div>

      <div className="cards">
        <Header />
        <div className="c-wrapper">
          <div className="cards_container">
            <Card
              title="Apple Inc."
              logo="/logo-assets/apple.svg"
              timer={"02d:15h:54m"}
              innertagline="ios 10 Lead Team Design"
              team={"89"}
              budget={"$88.5m"}
              success={"15.2%"}
            />
            <Card
              title="Nike Inc."
              logo="/logo-assets/nike.svg"
              timer={"10d:21h:33m"}
              innertagline="Fall Winter 2016 commercial"
              team={"254"}
              budget={"$14.5m"}
              success={"5.9%"}
              widthChange={1}
            />
            <Card
              title="Samsung Electronics Co. Ltd"
              logo="/logo-assets/samsung.svg"
              timer={"23d:05h:17m"}
              innertagline="Samsung Center App Design"
              team={"642"}
              budget={"$10.2m"}
              success={"28.5"}
              widthChange={1}
            />
          </div>
          <div className="cards_container">
            <Card
              colorFlag="1"
              title="Evernote Corp."
              logo="/logo-assets/evernote.svg"
              timer={"02d:20h:15m"}
              innertagline="Full product Redesign"
              team={"856"}
              budget={"$8.7m"}
              success={"67.4%"}
            />
            <Card
              colorFlag="1"
              title="Twitter Inc."
              logo="/logo-assets/twitter.svg"
              timer={"03d:14h:06m"}
              innertagline="Mobile Clients Design"
              team={"964"}
              budget={"$5m"}
              success={"10.3%"}
              widthChange={1}
            />
            <Card
              colorFlag="1"
              title="Sound Cloud."
              logo="/logo-assets/soundcloud.svg"
              timer={"03d:10h:22m"}
              innertagline="Innovatie Products Monetizaton"
              team={"230"}
              budget={"$4.9m"}
              success={"39.2%"}
              widthChange={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
