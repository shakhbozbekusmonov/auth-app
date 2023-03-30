import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

function Profile() {
    const [user, setUser] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [setAuth] = useToken(true);

    const { user_id } = useParams();

    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            const res = await fetch("https://reqres.in/api/users/" + user_id);

            const data = await res.json();

            if (data?.data) {
                setUser({ ...data?.data });
                setLoading(false);
            }
        })();
    }, [user_id]);

    return (
        <main className='p-5'>
            <button className='btn btn-primary' onClick={() => navigate(-1)}>
                {"<- Ortga"}
            </button>

            {user && (
                <div className='my-5'>
                    <h2> {user.first_name + " " + user.last_name}</h2>

                    <img
                        className='rounded'
                        src={user.avatar}
                        alt='Avatar'
                        width={300}
                        height={300}
                    />

                    <a href={"mailto:" + user.email}>{user.email}</a>
                </div>
            )}
            {loading && (
                <div className='d-flex justify-content-center'>
                    <div className='spinner-border ' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}

            <button
                className='btn btn-primary d-block'
                onClick={() => setAuth(false)}>
                Log Out
            </button>
        </main>
    );
}
export default Profile;
