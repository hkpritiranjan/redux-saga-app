import React,{Component} from 'react';
import {connect} from 'react-redux';

class HeaderText extends Component{

    render(){
        return(
            <span>
                 <h1> Searched Text: {this.props.text} </h1>
            </span>
            
        )
    }
}


// let HeaderText = ({ text }) => (
//     text ?
//     <span>
//         Searched Text: <h1> {text} </h1>
//     </span> :
//     null
//     );

const mapStateToProps = (state) => ({
    text: state.text,
})

HeaderText = connect(mapStateToProps, null)(HeaderText)
export default HeaderText;