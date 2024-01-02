import React from "react";

const page = ({ params }: { params: { userId: string } }) => {
  return <div>User {params.userId}</div>;
};

export default page;
