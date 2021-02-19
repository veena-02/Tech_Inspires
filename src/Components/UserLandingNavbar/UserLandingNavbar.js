import React from 'react';
import './UserLandingNavbar.css'
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import Toc from '@material-ui/icons/Toc'
import Comment from '@material-ui/icons/Comment'
import Notifications from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar/Avatar'

const UserNavbar=()=>{
    return(
        <div className="__navbar">
            <div style={{ display:'flex',alignContent:'center',flex:1}}>
                <div className="__searchbar" style={{ flex:1, display:'flex'}}>
                    <SearchIcon style={{ color:'blue[500]',fontSize:25 }} />
                    <input type="text" placeholder=" Search" ></input>
                </div>
                <div style={{ display:'flex' ,flex:4,justifyContent:'center'}}>
                    <Home className='__marginsideways' style={{fontSize:65 , color:'#2d2d74'}} />
                    <PeopleAlt className='__marginsideways' style={{fontSize:65 , color:'#2d2d74'}} />
                    <Toc className='__marginsideways' style={{fontSize:65 , color:'#2d2d74'}} />
                </div>
                <div style={{ display:'flex',flex:1,justifyContent:'flex-end',marginTop:5}}>
                    <Comment className='__marginsideways2' style={{fontSize:50 , color:'#2d2d74'}} />
                    <Notifications className='__marginsideways2' style={{fontSize:50 , color:'#2d2d74'}} />
                    <Avatar className='__marginsideways2' />
                </div>
            </div>
        </div>
    );
}
export default UserNavbar;