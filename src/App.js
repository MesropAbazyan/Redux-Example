import { useDispatch, useSelector } from "react-redux";

function App() {
  const name = useSelector(function(state) {
    return state.currentUser.name;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{name}</h2>

      <input
        type='text'
        value={name}
        onChange={(evt) => {
          dispatch({
            type: 'edit-current-user-name',
            payload: {
              name: evt.target.value,
            }
          });
        }}
      />
    </div>
  );
}

export default App;
