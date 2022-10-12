import React from "react";
import { useRouter } from "next/router";

const slug = () => {
    const  router  = useRouter();
    const { slug } = router.query;
  return <div>
    <h1>Title of the page {slug}</h1>
    <hr />
    <div>
      Lorem ipsum dolor sit amet consectetur
       adipisicing elit. Voluptates nemo doloribus 
       nulla, obcaecati vitae placeat ad? Dolores 
       mollitia consequatur ab aut! Quae voluptatum 
       dolor, velit ut obcaecati cum voluptas doloribus?
    </div>
  </div>;
};

export default slug;
