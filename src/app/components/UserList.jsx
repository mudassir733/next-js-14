
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
    // Artificial delay of 3 seconds (3000 ms)
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
  
    if (!res.ok) throw new Error('Failed to fetch users');
    
    const data = await res.json();
    return data;
  }
  
  export default async function UserList() {
    const users = await fetchUsers();
  
    if (!users || users.length === 0) {
      return <p>No users found.</p>;
    }
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  