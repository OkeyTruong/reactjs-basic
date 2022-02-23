import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    const listMembers = this.props.dataRedux;
    return (
      <>
        <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
  
        <div>
          {listMembers &&
            listMembers.length > 0 &&
            listMembers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp;{" "}
                  <span>x</span>
                </div>
              );
            })}
          <button>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.members,
  };
};

export default connect(mapStateToProps)(Home);
