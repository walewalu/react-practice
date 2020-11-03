import React, { useEffect } from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    useEffect(() => {
        console.log(post);
        console.log(users);
    }, [post, users])

    return (
        <div>
            <section>
                <h1>Post</h1>
                {loadingPost && 'Now Loading...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>User List</h1>
                {loadingUsers && 'Now Loading...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Sample;