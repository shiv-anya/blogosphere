import React, { Fragment } from "react";
import FollowList from "./FollowList";

const Aside = () => {
  return (
    <Fragment>
      <div className="fixed border-l border-gray-100 right-0 w-2/6 h-full">
        <FollowList />
      </div>
    </Fragment>
  );
};

export default Aside;
