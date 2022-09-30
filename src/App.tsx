import React from "react";
import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./state/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
