import useSWR from 'swr';
import { fetcher } from './fetcher';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const { data, error, isLoading } = useSWR<User[]>(
    'https://jsonplaceholder.typicode.com/users',
    fetcher,
    { revalidateOnFocus: false },
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>SWR Example:</h2>
      <h2>Users</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
