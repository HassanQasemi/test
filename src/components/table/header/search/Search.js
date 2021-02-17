import React from 'react';
import UserContext from '../../../../context/userContext'

function Search() {
    return (
        <UserContext.Consumer>
           {UserContext => 
              <input
                  type="text"
                  name="query"
                  className="form-control "
                  placeholder="Search..."
                  value={UserContext.searchQuery.first_name}
                  onChange={e => UserContext.handleSearch(e.currentTarget.value)}
                />}
        </UserContext.Consumer>
    )
}

export default Search
