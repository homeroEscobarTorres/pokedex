import React from "react";
import { Provider } from "react-redux";
import { Pokedex } from "./components/Pokedex";
import { store } from "./state/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
};

export default App;
