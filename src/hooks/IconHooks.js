import React, { useEffect, useState } from "react";

const IconHooks = (iconLinks) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${iconLinks}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items];
};

export default IconHooks;
