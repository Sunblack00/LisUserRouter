import React from "react";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold uppercase text-white mb-6 text-center tracking-wide">
          Danh Sách Người Dùng
        </h1>
        <UserList />
      </div>
    </div>
  );
}
