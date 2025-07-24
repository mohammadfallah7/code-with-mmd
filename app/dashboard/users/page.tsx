import { getUsers } from "@/lib/get-users";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {users.map((user) => (
        <div
          className="flex items-center gap-4 rounded-xl bg-gray-50/50 p-4 transition-all duration-300 hover:bg-gray-100/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50"
          key={user.id}
        >
          <img
            src={user.image ?? "/avatar.png"}
            alt={user.name ?? "User"}
            className="size-16 rounded-xl object-cover"
          />
          <div className="flex flex-col items-start gap-1">
            {user.name && (
              <span className="text-sm font-medium">{user.name}</span>
            )}
            <span className="text-xs font-light">{user.email}</span>
            <span className="text-xs font-light">{user.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
