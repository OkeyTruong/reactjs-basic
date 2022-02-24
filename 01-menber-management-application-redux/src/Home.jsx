import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  handleDeleteMember = (item) => {
    this.props.deleteMemberRedux(item);
  };
  handleCreateMember=()=>{
    this.props.createMemberRedux();
  }

  render() {
    const listMembers = this.props.dataRedux;
    return (
      <>
        <div>members management application</div>

        <div>
          {listMembers &&
            listMembers.length > 0 &&
            listMembers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp;{" "}
                  <span style={{cursor:"pointer"}} onClick={() => this.handleDeleteMember(item)}>x</span>
                </div>
              );
            })}
          <button onClick={()=>this.handleCreateMember()}>Add new</button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    deleteMemberRedux: (memberDelete) =>
      dispatch({ type: "DELETE_MEMBER", payload: memberDelete }),
    createMemberRedux: () => dispatch({ type: "CREATE_MEMBER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
