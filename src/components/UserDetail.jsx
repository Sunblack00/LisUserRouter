import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0nXqLm-aO_H_nS3T_UdPQ11vEmapYAyDV8K2i3sN5w8JLEoJIpdebm7wA5SBSx1cpc8&usqp=CAU",name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
  { id: 2, image: "https://i.pinimg.com/564x/e4/84/5d/e4845df6b853080c043cee9b66464795.jpg",name: "Trần Thị B", age: 30, email: "b@example.com" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yqFyb216-8v5hu90QpGDFbn0DNfMw6ZoaiDe_-jQ3jrpWB7eyFEzSZI-ah0xHN869tE&usqp=CAU",name: "Lê Văn C", age: 28, email: "c@example.com" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return (
      <div className="bg-gray-900 min-h-96 flex items-start justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-red-500 dark:text-red-400 uppercase">
            Người dùng không tồn tại
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-900 min-h-screen flex items-start justify-center p-6">
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all hover:scale-105 hover:shadow-2xl">
    <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
      {user.name}
    </h1>
    <div className="flex justify-center mb-6">
      <img
        src={user.image}
        alt={user.name}
        className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 dark:border-gray-700"
      />
    </div>
    <div className="text-center">
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
        <span className="font-semibold">Tuổi:</span> {user.age}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
    </div>
  </div>
</div>
  );
}
