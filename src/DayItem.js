import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

export class DayItem extends Component{

	render(){
		return (
				<Text style={styles.DayStyle}>
					{this.props.day}			
				</Text>
			)
	}
}
var styles = StyleSheet.create({

	DayStyle:{
		fontSize: 18,
		color:'blue'
	}

});
