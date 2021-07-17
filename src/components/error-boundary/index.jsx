import React from "react";

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
      return <span>Oops, something went wrong!</span>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
