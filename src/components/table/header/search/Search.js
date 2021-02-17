import React from 'react';
import UserContext from '../../../../context/userContext'

function Search() {
    const changeInputHandler = (e) => {
        UserContext.handleSearch(e?.currentTarget?.value)
    }

    return (
        <UserContext.Consumer>
           {UserContext => 
              <input
                  type="text"
                  name="query"
                  className="form-control"
                  placeholder="Search..."
                  value={UserContext.searchQuery?.first_name}
                  onChange={e => changeInputHandler(e)}
                />}
        </UserContext.Consumer>
    )
}

export default Search
