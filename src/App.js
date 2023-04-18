import Navbar from "./components/Nav";
import SplashPage from "./components/Splash";

function App() {
  return (
    <>
      <Navbar />
      <div id="page-content">
        <Switch>
        <Route exact path="/">
              <SplashPage />
        </Route>

      </Switch>
      </div>
    </>
  );
}

export default App;
