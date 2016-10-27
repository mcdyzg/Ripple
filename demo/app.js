import React from 'react'
import ReactDOM from 'react-dom'
import Ripple from '../src/Ripple'

// const App = React.createClass({
// 	render:function(){
// 		return (
// 			<div className=''>
// 				asdf
// 			</div>
// 			)
// 	}
// })

class App extends React.Component {

	click(){
		console.log('ddd')
	}

	render(){
		let t = this;
		return (
			<div className=''>
				<Ripple onClick={t.click} time='1s' method='wait' style={{background:'#EEE',height:'100px'}} className='d'>
			    	dfasdf
			    </Ripple>
			</div>
			)
	}
}

ReactDOM.render(<App />,document.getElementById("app"))