import React, { useEffect, useState } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const findPost = () => {
    return posts.filter(({title}) => {
      if (!search){
        return true
      }
      return(title.toLocaleLowerCase().includes(search))
    })
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // console.log(posts)
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <h4>Post List</h4>
      <div style={{ display: "flex", gap: 20 }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={search}
          onChange={(event) => {setSearch(event.target.value)}}
        />
      </div>
      <ol style={{ textAlign: "left" }}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title}
              <button
                style={{ width: "fit-content" }}
                onClick={() => {
                  const newList = posts.filter((postToDelete) => {
                    return postToDelete.id !== post.id;
                  });
                  setPosts(newList);
                }}
              >
                usun
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
