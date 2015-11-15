/** @jsx React.DOM */
    
var MyComponent = React.createClass({
    render: function(){
        return (
            <div className="ui segments">
              <div className="ui segment">
                <p> State is {this.state.count} </p>
              </div>
              <div className="ui segment">  
                <button type="button" className = "ui compact labeled icon button" id="increment" onClick={this.incrementCount}>Increment
                <i className="plus square outline icon"></i>
                </button>
                <button type="button" className = "ui compact labeled icon button" id="decrement" onClick={this.decrementCount}>Decrement
                <i className="minus square outline icon"></i>
                </button>
                <button type="button" className = "ui compact labeled icon button" id="reset" onClick={this.resetCount}>Reset
                <i className="refresh icon"></i>
                </button>
              </div>
            </div>
        );
    },
    getInitialState: function(){
        return {
            count: 0
        }
    },
    incrementCount: function(){
        this.setState({
            count: this.state.count + 1
        });
    }, 
    decrementCount: function(){
        if (this.state.count == 0 ){
            this.setState({
                count: 0
            });
        }
        else{
            this.setState({
                count: this.state.count - 1
            });
        }
    },
    resetCount: function(){
        this.setState({
            count: 0
        });
    }
});

React.render(
    <MyComponent name="React"/>,
    document.querySelector('#myDiv')
);



// var FilteredList = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//      return {
//        initialItems: [
//          "Apples",
//          "Broccoli",
//          "Chicken",
//          "Duck",
//          "Eggs",
//          "Fish",
//          "Granola",
//          "Hash Browns",
//          "Oranges",
//          "Banana"
//        ],
//        items: []
//      }
//   },
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//         <div className="item">
//           <div>
//             <input type="text" placeholder="Search" onChange={this.filterList}/>
//             <List items={this.state.items}/>
//           </div>
//         </div>
//     );
//   }
// });

// var List = React.createClass({
//   render: function(){
//     return (
//       <div className="ui vertical pointing menu">
//       {
//         this.props.items.map(function(item) {
//           return  <div className="item" > 
//                       <a className="active teal item" key={item}>{item} </a>
//                   </div>
//         })
//        }
//       </div>
//     )  
//   }
// });

// React.render(<FilteredList/>, document.querySelector('#myDiv'));