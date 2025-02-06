const Y = (prop) => {
  console.log(prop); //{setData:f}

  let val = "Bye";

  function handleChange() {
    console.log("clicked");
    prop.setData(val);
  }
  return (
    <div>
      <p>Y Component</p>
      <button onClick={handleChange}>click</button>
    </div>
  );
};

export default Y;
