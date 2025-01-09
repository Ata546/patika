import './App.css'
// import axios from 'axios';
import Serv from "../src/Lib/service"

function App() {
  // setTimeout(() => {
  //   console.log("merhaba")

  // }, 2000);
  // setInterval(() => {
  //   console.log("Merhaba, ben her saniye çalışacağım")
  // }, 1000)

  // const sayHi = (cb) => {
  //   cb();
  // }
  // sayHi(() => {
  //   console.log("helloata")
  // });

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((veri) =>
  //     console.log(veri.json()))
  //   .then((users) => {
  //     console.log("users yüklendi" + users);


  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //       .then((data) => data.json())
  //       .then((posts) => {
  //         console.log("Post 1 yüklendi ", posts)


  //       })
  //     fetch('https://jsonplaceholder.typicode.com/posts/2')
  //       .then((data) => data.json())
  //       .then(data =>
  //         console.log("post 2 yüklendi", data))


  //   });



  // async function getData() {
  //   const users = await (await await fetch("https://jsonplaceholder.typicode.com/users")).json();

  //   const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();


  //   const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

  //   console.log(users)
  //   console.log(post1)
  //   console.log(post2)
  // }
  // getData();


  // async function getData() {
  //   const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

  //   const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");


  //   const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

  //   console.log("users", users)
  //   console.log("post1", post1)
  //   console.log("post2", post2)
  // }
  // getData();

  // const getComments = (number) => {
  //   return new Promise((resolve, reject) => {
  //     if (number == 1) {
  //       resolve("Comments");
  //     }
  //     reject(" bir problem oluştu.")

  //   })
  // }
  // getComments(1)
  //   .then((data) =>
  //     console.log(data))
  //   .catch((eror) => console.log(eror))





  // const getComments = () => {
  //   return new Promise(async (resolve, reject) => {
  //     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  //     // if (number == 1) {
  //     //   resolve("Comments");
  //     // }
  //     // reject(" bir problem oluştu.")
  //     resolve(data)
  //     reject("bir sorun oluştu")

  //   })
  // }




  // const getPost = (post_id) => {
  //   return new Promise(async (resolve, reject) => {
  //     const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

  //     reject("bir sorun data oluştu")


  //   })
  // }

  // getPost(1)
  //   .then((data) =>
  //     console.log(data))
  //   .catch((eror) => console.log(eror))

  // getComments()
  //   .then((data) =>
  //     console.log(data))
  //   .catch((eror) => console.log(eror))




  // (async () => {
  //   try {
  //     const post = await getPost(1)

  //     const comment = await getComments()

  //     console.log("comment", comment)
  //     console.log("post", post)
  //   } catch (error) {
  //     console.log(error)

  //   }
  // })()

  // Promise.all([getPost(1), getComments()]).then(console.log).catch(console.log)

  // const users = [{
  //   name: "Ata",
  //   age: "29"
  // },
  // {
  //   name: "Efe",

  // },
  // {
  //   name: "Görkem",

  // }
  // ];

  // console.log(users)
  // users.push("Barış")
  // console.log(users)

  // users.map((item) => {
  //   console.log(item)

  // })
  // const Result = users.find((item) => item.name === "Ata")// eğer ata ismi varsa yazdır demek oluyor
  // console.log(Result)

  // const filtered = users.filter((item) => item.name === "Ata" && item.age >= 29)
  // console.log(filtered)

  return (
    <>
      <Serv />
    </>
  )
}

export default App
