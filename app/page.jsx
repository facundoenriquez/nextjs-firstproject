import Users from '@/components/Users';
import axios from 'axios';

async function fetchUsers() {
    const res = await axios('https://reqres.in/api/users');
    const { data } = res.data;
    return data;
}

export default async function HomePage() {
    const users = await fetchUsers();
    return (
        <Users users={users} />
    );
}
