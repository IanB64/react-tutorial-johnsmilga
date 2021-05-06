import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  const getUsers = async () => {
    try {
      const resp = await fetch(url);
      console.log(resp.status);
      if (resp.status >= 200 && resp.status <= 299) {
        const user = await resp.json();
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    getUsers();
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((user) => console.log(user))
    //   .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
