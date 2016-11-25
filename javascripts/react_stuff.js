var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;

function TableEntry(props) {
  return (
    <tr>
      <td>{props.pos}</td>
      <td>{props.user.username}</td>
      <td>{props.user.coffees}</td>
      <td><Button className='coffee_button' onClick={() => props.onClick()}>
            +1
          </Button>
      </td>
    </tr>
  );
}

class UserList extends React.Component{
  constructor() {
    super();
    this.state = {
      users: [
      {username: "Otto", coffees: 2},
      {username: "Klaus", coffees: 3},
      {username: "Kevin", coffees: 10},
      {username: "Jochen", coffees: 20}
      ]
    };
  }

  handleClick(position){
    var users = this.state.users.slice();
    users[position].coffees = users[position].coffees + 1;
    this.setState({
      users: users,
    })
  }

  render() {
    const userlist = this.state.users.map((cur_user, position) => {
        return (
          <TableEntry key={position} user={cur_user} pos={position + 1}onClick={() => this.handleClick(position)}/>
        );
      });
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Coffees</th>
            <th>Add Coffee</th>
          </tr>
        </thead>
        <tbody>
          {userlist}
        </tbody>
      </Table>
    )
  }
}

ReactDOM.render(<UserList />, document.getElementById('react-container'));



// class ButtonCounter extends React.Component {
//   constructor(probs) {
//     super(probs);
//     this.state = {
//       counter: 0
//     };
//   }

//   add() {
//     this.setState({counter: this.state.counter + 1});
//   }

//   render() {
//     return(
//       <div>
//         <button onClick={this.add.bind(this)}>
//           +
//         </button>
//         <p>Count: {this.state.counter}</p>
//       </div>
//     );
//   }
// };

// ReactDOM.render(<ButtonCounter />, document.getElementById('react-container'));
// ReactDOM.render(<ButtonCounter />, document.getElementById('react-container-2'));
