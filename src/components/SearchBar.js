import React from 'react';


class searchBar extends React.Component {
 state={
     value:"",
     check:false
 }


handleChange =(event) =>{
this.setState({value:event.target.value})
}

handleCheck =(event) =>{
    this.setState({check :!event.target.checked})
}

    render(){
        return(
            <div>
                <h2>Search</h2>
                <input type="text" name="searchbar" value={this.state.value} onChange ={this.handleChange}/>
                <div>
                <input type="checkbox" name="chackbox" value={this.state.check} onClick ={this.handleCheck}/>
                <p>Only show products on stock</p>
                </div>              
            </div>
        )
    }

}

export default searchBar;