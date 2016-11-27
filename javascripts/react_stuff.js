var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
var Form = ReactBootstrap.Form;
var Input = ReactBootstrap.Input;

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      users: [],
      cur_username: "",
    };
  }

  handleClick(position){
    var users = this.state.users.slice();
    users[position].coffees = users[position].coffees + 1;
    this.setState({
      users: users,
    });
  }

  handleChange(e) {
    this.setState({cur_username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      users: this.state.users.concat([{
        username: this.state.cur_username,
        coffees: 0
      }]),
      cur_username: "",
    });
  }

  render() {
    const userlist = this.state.users.map((cur_user, position) => {
        return (
          <TableEntry key={position} user={cur_user} pos={position + 1} onClick={() => this.handleClick(position)}/>
        );
      });
    return (
      <div>
        {this.state.users.length < 1 ? null :
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
        }
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.cur_username} placeholder="Name"/>
            <button>Add new user</button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<UserList />, document.getElementById('react-container'));
