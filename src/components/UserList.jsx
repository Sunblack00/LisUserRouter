import React from "react";
import { Link } from "react-router-dom";
const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" },
];

export default function UserList() {
  return (
    <div className="bg-gray-900 flex items-center justify-center">
      <ul className="max-w-md w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        {users.map((user) => (
          <li key={user.id} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-200">
              <div className="flex-1 min-w-0">
                <Link
                  to={`/user/${user.id}`}
                  className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 truncate"
                >
                  {user.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
