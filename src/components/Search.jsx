import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user..."
        />
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/5996855/pexels-photo-5996855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="userChatInfo">
          <span>Tiago</span>
        </div>
      </div>

    </div>
  )
}

export default Search