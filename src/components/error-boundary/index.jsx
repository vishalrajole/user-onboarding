import React from "react";
import { InfoMessage } from "../../style/common";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.info) {
      return <InfoMessage>Oops, something went wrong!</InfoMessage>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
