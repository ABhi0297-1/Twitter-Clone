import React from 'react'
import './Widget.css'

import SearchIcon from '@material-ui/icons/Search';
function Widget() {
    return (
    
        <div className="Widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
           <input placeholder="Search Twitter" type="text"/>
            </div>
           <div className="widgets__widgetContainer">
              <img src="https://scratchtheweb.com/wp-content/uploads/2019/10/add-twitter-widgets.png" alt=""/> 
           </div>
                    </div>
                    
    )
}

export default Widget
