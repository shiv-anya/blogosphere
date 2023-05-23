import React, { Fragment } from "react";
import FollowCard from "./FollowCard";
const followPeopleList = [
  {
    name: "Matthew Perry",
    intro: "I like to be friends",
  },
  {
    name: "Rachael Green",
    intro: "I like to be friends",
  },
  {
    name: "Ross Geller",
    intro: "I like to be friends",
  },
];
const FollowList = () => {
  return (
    <Fragment>
      <div className="ml-10 my-10">
        <h2 className="font-bold">Who To Follow</h2>
        <ul>
          {followPeopleList.map((p) => (
            <li key={p.name}>
              <FollowCard name={p.name} key={p.name} intro={p.intro} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default FollowList;
