import Moment from'moment';
import React, {Component} from 'react';
import { View, Text, AppRegistry,StyleSheet} from 'react-native';
//import DayItem  from './src/DayItem'  ** if it expotrted as adefault it doesnt need curly braces
import  {DayItem}  from './src/DayItem'

//var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default class AwesomeProject extends Component{

  render(){

    return (
      <View style= {styles.container}>
    
        {this.days()} 
      </View>
    )
  }

/*days(){
  return DAYS.map((index)=>{
     return(
      <DayItem  day={index}  />
      );
  });
}
*/
days(){
  var weekdays=[];

  for(i=0;i<7;i++){
    var days=Moment().add(i,'days').format('dddd')
    weekdays.push(
      <DayItem day={days} daysUntill={i}/>
    );
  }
  return weekdays;
}


}


var styles= StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },


});


AppRegistry.registerComponent('AwesomeProject',() => AwesomeProject);