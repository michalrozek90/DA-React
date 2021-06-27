import MyButtons from "./MyButtons";

function MyName({ name }) {
  return (
    <>
      <h1>Moje imię to: {name}</h1>
      <MyButtons />
    </>
  );
}

export default MyName;
