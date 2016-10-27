Ripple
==========

Material Designer风格的水波纹效果组件,与div使用方法基本相同

## 项目引用组件 ##

- react-kit

## 运行Demo

1. npm install 
2. npm run demo

**有些时候国内npm源访问比较慢，那么推荐使用cnpm。建议使用nvm管理自己的node版本，建议使用较高版本的nodejs。**

1. npm install cnpm -g
2. cnpm install -l
3. npm run demo

## Usage

1. 

	import React from 'react'
	import ReactDOM from 'react-dom'
	import Ripple from '../src/Ripple'

	class App extends React.Component {
		render(){
			return (
				<div className=''>
					<Ripple time='1s' style={{background:'#EEE',height:'100px'}} className='d'>
				    	dfasdf
				    </Ripple>
				</div>
				)
		}
	}
	
	ReactDOM.render(<App />,document.getElementById("app"))


## API ##

- `time` :  水波纹持续时间，默认'0.6s'
- `color` :  水波纹的颜色，默认'rgba(0,0,0,.6)'
- `method` : 'wait'--上个水波纹结束后才能下次点击，'noWait'--允许连续不停点击，默认'wait'
	
