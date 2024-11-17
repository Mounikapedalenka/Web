import React from 'react';
import './Navbar.css';
class Navbar extends React.Component{
render(){
    return(
        <div class="nav">
        <nav > 
            <img src="https://th.bing.com/th/id/R.82d980924dd0923ed65fb9a5b66a082c?rik=EBsEUaN0vGH1FQ&riu=http%3a%2f%2fwww.nepalenergyforum.com%2fwp-content%2fuploads%2f2012%2f12%2fGMR-Group-Logo.jpg&ehk=9gux8dif2UnNJpuQGnoMzIR28pq3StOBKZw3SEaQzRU%3d&risl=&pid=ImgRaw&r=0" id="img" alt="gmr"></img>
                <a class="active" href="Home">Home</a>
                <a class="activ" href="Login">Admin</a>
               <a class="acti" href="New">Trainer</a>
                <a class="act" href="New1">Student</a>
                <a class="ac" href="About">Contact</a>
              
        </nav>
        </div>
    );
}
}
export default Navbar;