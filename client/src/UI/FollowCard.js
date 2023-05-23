import React from "react";

const FollowCard = (props) => {
  return (
    <div className="w-72 flex justify-between my-2">
      <img
        src="https://source.unsplash.com/random/?people"
        alt={props.name}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-bold">{props.name}</p>
        <p className="text-sm">{props.intro}</p>
      </div>
      <a className="w-16 rounded-full border border-black flex justify-center items-center text-sm">
        Follow
      </a>
    </div>
  );
};

export default FollowCard;
