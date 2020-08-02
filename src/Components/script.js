import React from 'react'

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "Fruits",
            name: ["Oranges","Pineapples","Avocado"],
            quantity:[3,2,1] 
        };
    }
    
   
    render() {
        return (
            <div className="container">
                <h1> {this.state.type}</h1>
            <div className="Orange">
                <img src="https://www.netclipart.com/pp/m/8-81716_orange-png-image-free-download-transparent-background-orange.png" alt="orange"></img>
                    <p>{this.state.name[0]}</p>
                    <p>{this.state.quantity[0]}</p>
                </div>

            <div className="pineapple">
                <img src="https://spng.pinpng.com/pngs/s/478-4788766_ananas-produit-import-liquidificador-arno-optimix-plus-ln25.png" onClick={this.changeName} alt="pineApple"></img>
                   <p>{this.state.name[1]}</p>
                   <p>{this.state.quantity[1]}</p>
                </div>

            <div className="avocado">
                <img src="https://efructifera.com/wp-content/uploads/2017/12/hass-avocado.png" onClick={this.changeAvoc} alt="Avocado"></img>
                   <p>{this.state.name[2]}</p>
                   <p>{this.state.quantity[2]}</p>
                </div>
           </div>     
        );
    }
}
  
    export default ShoppingList;