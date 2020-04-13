import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
        console.log(this.props,'props.......24')
      return C ? <C {...this.props} /> : <div>loadig。。。。。。</div>;
    }
  }

  return AsyncComponent;
}

