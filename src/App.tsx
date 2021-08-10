import { Menu } from "./components/menu/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ChichenItza } from "./features/chichen-itza/ChichenItza";
import { ChristTheRedeemer } from "./features/christ-the-redeemer/ChristTheRedeemer";
import { TajMahal } from "./features/taj-mahal/TajMahal";
import { Petra } from "./features/petra/Petra";
import { MachuPicchu } from "./features/machu-picchu/MachuPicchu";
import { GreatWallOfChina } from "./features/great-wall-of-china/GreatWallOfChina";
import { Colosseum } from "./features/colosseum/Colosseum";
import { BackgroundProvider } from "./utils/BackgroundContext";

function App() {
  return (
    <BackgroundProvider>
      <Router>
        <main className="flex flex-col flex-1">
          <Switch>
            <Redirect exact from="/" to="/chichenitza" />
            <Route path="/chichenitza">
              <ChichenItza />
            </Route>
            <Route path="/christtheredeemer">
              <ChristTheRedeemer />
            </Route>
            <Route path="/colosseum">
              <Colosseum />
            </Route>
            <Route path="/greatwallofchina">
              <GreatWallOfChina />
            </Route>
            <Route path="/machupicchu">
              <MachuPicchu />
            </Route>
            <Route path="/petra">
              <Petra />
            </Route>
            <Route path="/tajmahal">
              <TajMahal />
            </Route>
          </Switch>
        </main>
        <Menu />
      </Router>
    </BackgroundProvider>
  );
}

export default App;
