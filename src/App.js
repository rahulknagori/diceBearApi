import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";

function App() {
  const [userImg, setUserImg] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const users = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((res) => (res.ok ? res.json() : {}));

      setUserData(users);

      let urls = [];
      users.forEach((user) => {
        urls.push(
          `https://avatars.dicebear.com/api/avataaars/${user.name}.svg?mood[]=happy&mood[]=sad`
        );
      });

      Promise.all(
        urls.map((url) =>
          fetch(url)
            .then((response) => response)
            .catch((err) => console.error("err=====>", err))
        )
      ).then((images) =>
        images.forEach((image) => setUserImg((prev) => [...prev, image]))
      );
    }

    fetchUsers();
  }, []);

  return (
    <div className="main">
      <section className="user">
        {userData.map((each, index) => {
          return (
            <UserCard
              key={index}
              userData={each}
              userImg={userImg}
              index={index}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
