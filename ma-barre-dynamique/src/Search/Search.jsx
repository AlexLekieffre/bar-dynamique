import { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };
  console.log(searchTerm);

  return (
    <>
      <input type="text" onChange={handleSearchTerm} />

      <div>
        
        {data
          .filter((val) => {
            return val.email.toLowerCase().includes(searchTerm);
          })
          .map((post) => {
            if(searchTerm !== "")
            return (
              <div className="resutlat" key={post.email.toLowerCase()}>
                {post.email}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Search;
