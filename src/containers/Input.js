import React,{Component} from 'react';
import {connect} from 'react-redux';
import { setText } from '../actions';


// let Input = ({setText})=>(
//     <input type="text" onChange={setText}   />
// );
class Input extends Component{

    componentDidMount(){
        console.log('componenty did mount',this.props)
    }
    onChangeText(text) {
        console.log('text is called',text.target.value)
        this.props.setText(text.target.value);
    }
    render(){
        return (<input type="text" onChange={this.onChangeText.bind(this)} />)
    }
}

const mapDispatchToProps = {
    setText: setText,
};

Input = connect(null,mapDispatchToProps)(Input);

export default Input;