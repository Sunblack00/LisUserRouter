import React from "react";
import { useParams } from "react-router-dom";

const users = [
  // { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return (
      <div className="bg-gray-900 min-h-96 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-red-500 dark:text-red-400 uppercase">
            Người dùng không tồn tại
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-900 min-h-96 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {user.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Tuổi: {user.age}
        </p>
        <p className="text-gray-700 dark:text-gray-300">Email: {user.email}</p>
      </div>
    </div>
  );
}
