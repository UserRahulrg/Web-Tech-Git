const ChildB = (y) => {
  console.log(y); // {prop2:[{},{}]}
  let { prop2 } = y;
  return (
    <div>
      <h1>Child B</h1>
      {prop2.map((product) => {
        console.log(product);
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default ChildB;
