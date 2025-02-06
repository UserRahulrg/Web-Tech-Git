const PropsChild1 = (props) => {
  console.log(props); //{data:{data,arr}}

  let {data:{data,arr}} = props;
  console.log(data);
  return (
    <div>
      <h2>Props Child 1 {data}</h2>
    </div>
  );
};
export default PropsChild1;
