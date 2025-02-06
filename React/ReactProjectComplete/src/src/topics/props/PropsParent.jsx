import ChildA from "./ChildA";
import PropsChild1 from "./PropsChild1";
import PropsUsers from "./PropsUsers";
const PropsParent = () => {
  let data = "Hello Universe";
  let arr = [10, 20, 30, 40, 50];

  let users = [
    { id: 1, name: "Raj", company: "tcs", designation: "developer" },
    { id: 2, name: "Varun", company: "google", designation: "tester" },
    { id: 3, name: "Ajay", company: "wipro", designation: "manager" },
    { id: 4, name: "Sahil", company: "facebook", designation: "db engineer" },
    { id: 5, name: "Vijay", company: "amazon", designation: "Hr" },
    { id: 6, name: "Sandeep", company: "oracle", designation: "intern" },
  ];

  let products = [
    {
      id: 1,
      title: "laptop",
      img: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
    },
    {
      id: 2,
      title: "Mobile",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s",
    },
  ];
  return (
    <div>
      <h1>Props Example</h1>
      {/* <PropsChild1 data={data} arr={arr}/> */}
      {/* <PropsChild1 data={{ data, arr }} /> */}
      {/* <PropsUsers users={users}/> */}

      <ChildA prop1={products}/>
    </div>
  );
};
export default PropsParent;
