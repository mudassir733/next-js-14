// app/users/page.tsx
import UserList from '../components/UserList';
import { Suspense } from 'react'
import Loading from './loading';

export default function UsersPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
     <h1>User List</h1>
    <Suspense fallback={<Loading/>}>
       <UserList /> 
    </Suspense>
    </div>
  );
}
