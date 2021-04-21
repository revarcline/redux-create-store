const createStore = () => {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  };

  const getState = () => state;

  return { dispatch, getState };
};

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };

    default:
      return state;
  }
};
const render = () => {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
};

let store = createStore();
store.dispatch({ type: "@@INIT" });

let button = document.getElementById("button");
button.addEventListener("click", () => {
  store.dispatch({ type: "INCREASE_COUNT" });
});
