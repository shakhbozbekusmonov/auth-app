import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            const res = await fetch("https://reqres.in/api/users?page=2");

            const data = await res.json();

            if (data?.data) {
                setUsers([...data?.data]);
                setLoading(false);
            }
        })();
    }, []);

    return (
        <section>

            <ul className='list-group w-25 mx-auto'>
                {users?.length > 0 &&
                    users.map((user) => (
                        <li className='list-group-item ' key={user.id}>
                            <Link
                                className='d-flex align-items-center justify-content-between'
                                to={"/profile/" + user.id}>
                                <strong>
                                    {user.first_name + " " + user.last_name}
                                </strong>
                                <img
                                    className='img-fluid rounded'
                                    src={user.avatar}
                                    alt={
                                        user.first_name +
                                        " " +
                                        user.last_name +
                                        "'s avatar"
                                    }
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>

            {loading && (
                <div className='d-flex justify-content-center'>
                    <div className='spinner-border ' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Home;
