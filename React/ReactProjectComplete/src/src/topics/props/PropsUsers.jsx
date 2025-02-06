const PropsUsers = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>Props Users</h1>
      {users.map(({ id, name, designation, company }, i) => {
        return (
          <section key={id}>
            <h3>Name : {name}</h3>
            <h4>Degination : {designation}</h4>
            <h4>Company : {company}</h4>
          </section>
        );
      })}
    </div>
  );
};
export default PropsUsers;
