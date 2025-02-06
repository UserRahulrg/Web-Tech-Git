import ChildB from "./ChildB";

const ChildA = (x) => {
  console.log(x);//{prop1:[{},{}]}

  return (
    <div>
      <h1>Child A</h1>
      <ChildB prop2={x.prop1}/>
    </div>
  );
};
export default ChildA;
