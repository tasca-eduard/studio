import { Component } from 'react';
import FormControl from './components/FormControl/FormControl';
import TableButton from './components/TableButton/TableButton';
import { USER_DATA } from './dummy-data/dummy-users';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: USER_DATA,
          column: '',
          direction: 'asc',
          userFilter: ''
        }
    }

    sortUserBy = (e) => {
      let sortedArray = this.state.users.slice();
      let direction = this.state.direction;
      const columnName = e.currentTarget.name;

      if(this.state.column === columnName) {
          direction = direction === 'asc' ? 'desc' : 'asc';
      }

      sortedArray.sort((a,b) => {
        if(direction === 'asc') {
            //asc sort
            return a[columnName] > b[columnName] ? 1 : a[columnName] < b[columnName] ? -1 : 0;
        } else {
            //desc sort
            return a[columnName] > b[columnName] ? -1 : a[columnName] < b[columnName] ? 1 : 0;
        }
      });
      
      this.setState({
        users: sortedArray,
        column: columnName,
        direction: direction,
      });
    }

    setUserFilter = (e) => {
      this.setState({
        userFilter: e.target.value
      })
    }
    
    getFilteredUsers = (filterValue) => {
      const users = this.state.users;
      let filteredUsers = users;

      if(filterValue) {
        filteredUsers = users.filter(user => user.username.includes(filterValue) || user.email.includes(filterValue))
      }

      return filteredUsers;
    }

    getUsersLength = () => {
      return this.getFilteredUsers(this.state.userFilter).length;
    }

    renderUserData = () => {
      return this.getFilteredUsers(this.state.userFilter).map((user, index) => {
        return(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        );
      })
    }

    render() {
      return (
        <>
          <div className="form-control">
            <FormControl 
              labelText="Filter"
              type="text"
              name="filter"
              id="user-filter"
              placeholder="Enter filter"
              handleChange={this.setUserFilter}
            />
          </div>
          <table className="table table-dark">
              <thead>
                  <tr className="table-dark">
                      <th>#</th>
                      <th>
                        <TableButton 
                          text="Username"
                          buttonName="username"
                          columnName={this.state.column}
                          direction={this.state.direction}
                          handleClick={this.sortUserBy}
                        />
                      </th>
                      <th>
                        <TableButton 
                          text="Email"
                          buttonName="email"
                          columnName={this.state.column}
                          direction={this.state.direction}
                          handleClick={this.sortUserBy}
                        />
                      </th>
                  </tr>
              </thead>
              <tbody>                    
                  {this.renderUserData()}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th colSpan="3">
                    There {this.getUsersLength() === 1 ? 'is' : 'are'} {this.getUsersLength()} {this.getUsersLength() === 1 ? 'result' : 'results'}  
                  </th>
                </tr>
              </tfoot>
          </table>
        </>
      );
    }
}
export default UserList;