import axios from "axios";

async function getUser(id) {
    const res = await axios(`https://reqres.in/api/users/${id}`);
    const { data } = res.data;
    return data;
}

export default async function UserPage({ params }) {
    const { id } = params
    const user = await getUser(id)
    console.log(user)
    return (
        <div className="bg-slate-400 p-4 rounded-md">
            <img src={user.avatar} className="m-auto my-4" />
            <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
            <p>email: {user.email}</p>
        </div>
    )
}