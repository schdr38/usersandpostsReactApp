import React from 'react';
import ReactDataGrid from 'react-data-grid'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers,sendUsersLocation } from '../actions/userActions';
import {fetchPosts} from '../actions/postActions';

class UserTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      { key: 'id', name: 'id' },
      { key: 'username', name: 'username' },
      { key: 'name', name: 'name' },
      { key: 'email', name: 'email' },
      { key: 'phone', name: 'phone' },
      { key: 'website', name: 'website' },
      {key:'company',name:'company'},
      {key:'address',name:'address'},
      

    ];
    this.state={
      isLoading:false,
      selectedRows:[]
    }
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  createRows = () => {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
      });
    }

    return rows;
  };

  

  rowGetter = (index) => {
    return this.props.users[index];
  };
  onRowSelect = (rows) => {
    this.setState({selectedRows:rows},()=>{
   var users = this.state.selectedRows.map( row=>{
     return {id:row.id,name:row.name}
   })
   var usersLocation = this.state.selectedRows.map(row=>{
     return {id:row.id,name:row.name,location:row.location}
   })
   this.props.fetchPosts(users);
   this.props.sendUsersLocation(usersLocation);
    })
   };
   componentDidMount(){
    this.props.fetchUsers();
    this.setState({isLoading:true})
  }

  render() {
    if(this.state.isLoading === false)
    return(
    <div>
  <h1>Tablo Yükleniyor</h1>
    </div>)



    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.users.length}
        enableRowSelect="multi"
        onRowSelect={this.onRowSelect}

        minHeight={500} />);
  }
}

UserTable.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    fetchPosts:PropTypes.func.isRequired,
    sendUsersLocation:PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    users: state.users.items,
  });







export default connect(mapStateToProps,{fetchUsers,fetchPosts,sendUsersLocation})(UserTable) 
