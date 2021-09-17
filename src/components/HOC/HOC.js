import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewCompnent extends React.Component {
    render() {
      return (
        // REUSING SIGN IN IN NAVBAR AND AUTH COMPONENTS
        <OriginalComponent {...this.props}>
          <section>
            <h1>sign in</h1>
          </section>
        </OriginalComponent>
      );
    }
  }

  return NewCompnent;
};

export default UpdatedComponent;
