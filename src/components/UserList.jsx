import React from "react";
import { Link } from "react-router-dom";
const users = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0nXqLm-aO_H_nS3T_UdPQ11vEmapYAyDV8K2i3sN5w8JLEoJIpdebm7wA5SBSx1cpc8&usqp=CAU",name: "Nguyễn Văn A"},
    { id: 2, image: "https://i.pinimg.com/564x/e4/84/5d/e4845df6b853080c043cee9b66464795.jpg",name: "Trần Thị B" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yqFyb216-8v5hu90QpGDFbn0DNfMw6ZoaiDe_-jQ3jrpWB7eyFEzSZI-ah0xHN869tE&usqp=CAU",name: "Lê Văn C"},
];

export default function UserList() {
  return (
  <ul className=" w-full divide-y dark:divide-gray-700 dark:bg-gray-800 rounded-lg p-6">
    {users.map((user) => (
      <li key={user.id} >
        <div className="flex items-center dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src={user.image} alt="" 
          className="w-12 h-12 m-4 object-cover rounded-full border-2 border-gray-300 dark:border-gray-700"/>
          <div >
            <Link
              to={`/user/${user.id}`}
              className="text-gray-900 dark:text-white font-medium text-lg dark:hover:text-violet-400"
            >
              {user.name}
            </Link>
          </div>
        </div>
      </li>
    ))}
  </ul>

  );
}
