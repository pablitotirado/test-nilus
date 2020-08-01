import React from "react";

import { RingLoader } from "react-spinners";

const Loading = loading => {
  return (
    <>
      <RingLoader
        loading={loading}
        color="white"
        size={120}
        css={`
          position: absolute;
          bottom: 40%;
          right: 45%;9
        `}
      />
    </>
  );
};

Loading.defaultProps = {};
export default Loading;
