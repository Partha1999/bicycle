import React, { useEffect, useState } from "react";

const handleReport = (item) => {
  delete item?._id;
  console.log(item);
};

const Advertisement = () => {
  const [adv, setAdv] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => setAdv(data));
  }, []);
  return (
    <section>
      <h1 className="mt-10 text-3xl font-semibold text-center">
        Advertisement
      </h1>
      
    </section>
  );
};

export default Advertisement;
