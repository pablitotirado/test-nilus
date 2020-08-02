import React from "react";
import PropTypes from "prop-types";
import { RingLoader } from "react-spinners";

const css = `
  position: absolute;
  bottom: 40%;
  right: 45%;9
`;

const Loading = loading => (
  <RingLoader loading={loading} color="white" size={120} css={css} />
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
Loading.defaultProps = {
  loading: false,
};
export default Loading;
