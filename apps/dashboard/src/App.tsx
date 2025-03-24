import client from "./api-client";
import "./App.css";

function App() {
  const { data: users, isLoading } = client.users.findAll.useQuery(["users"]);

  if (isLoading) <div>Loading...</div>;

  if (!users) return null;

  if (!users.body) return <div>No User records</div>;

  return (
    <>
      {users.body.data.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </>
  );
}

export default App;
