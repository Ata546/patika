import axios from 'axios';
function service() {
    // async function getData(userid) {
    //     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users" + userid);

    //     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1" + userid);


    //     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2" + userid);

    //     console.log("users", users)
    //     console.log("post1", post1)
    //     console.log("post2", post2)
    // }
    // getData();

    async function getData(number) {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + number);

        const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);


        const { data: post2 } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

        console.log("users", users)
        console.log("post1", post1)
        console.log("post2", post2)
    }
    getData(1);

    return (
        <div>

        </div>
    )
}

export default service;
