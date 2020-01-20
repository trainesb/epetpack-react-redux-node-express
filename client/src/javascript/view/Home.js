import React, {Component} from "react";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          list: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        fetch('http://localhost:5000/users')
            .then(res =>    {
                console.log(res);
                return res.json()
            })
            .then(list => {
                console.log(list);
                this.setState({ list })
            });
    }

    render() {
        const { list } = this.state;

        return(
        	<div id="Home">
                <div className="App">
                    <h1>List of Items</h1>
                    {list.map(list =>
                        <div key={list.id}>Name: {list.email} Password: {list.password}</div>
                    )}
                </div>
        	</div>
        );
    }
}

export default Home;
