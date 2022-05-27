import React from "react";
import "./ChannelRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Avatar } from "@mui/material";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <CheckCircleIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
