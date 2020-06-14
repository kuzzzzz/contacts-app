import React from "react";
import "./App.css";
import ContactCard from "./Contact";

const App = () => {
  const contacts = [
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQGHHh-O8h0qPQ/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=xo2BKzaFrAV_1KvMvh6D98WxAY8uCNBwB0rDWJuyP6A",
      name: "Atumah Daniel",
      email: "jenny.han@notreal.com",
      age: 23
    },
    {
      avatar:
        "https://pbs.twimg.com/profile_images/1265578058947465216/RH7oINIU_400x400.jpg",
      name: "Ceeynan",
      email: "iamfabulouse@gmail.com",
      age: 23
    },
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHz37uf3Z-Jxw/profile-displayphoto-shrink_800_800/0?e=1597881600&v=beta&t=VTvxBDiLuY2zEz1AfoxGxNfG_DDWWoI1IQmrWtNBE2Y",
      name: "Onome Nesimeye",
      email: "pearlarel@gmail.com",
      age: 23
    }
  ];
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.avatar}
          name={contact.name}
          email={contact.email}
          age={contact.age}
        />
      ))}
    </>
  );
};

export default App;
