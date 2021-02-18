import React from 'react';
import UserContext from '../../../../context/userContext'

function Search() {
    
     

    return (
        <UserContext.Consumer>
           {UserContext => 
              <input
                  type="text"
                  name="query"
                  className="form-control"
                  placeholder="Search..."
                  value={UserContext.searchTerm}
                  onChange={e => UserContext.handleSearch(e.target.value)}
                />}
        </UserContext.Consumer>
    )
}

export default Search
