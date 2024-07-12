import React, { useEffect, useState } from "react";

const Item1 = () => {
  const [temp, setTemp] = useState<string>("");
  useEffect(() => {
    setTemp("in useEffect hook");
  }, []);

  return <div>Content Item1 -{temp}</div>;
};

export default Item1;
