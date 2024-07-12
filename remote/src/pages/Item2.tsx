import React, { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}

const Item2: React.FC = () => {
  const [data, setData] = useState<Data>({ id: 1, title: 'title', body: 'body' });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response: Data = await resp.json();
        setData(response);
        console.log('response: ', response);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Item2;
