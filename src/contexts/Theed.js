import React, { Component } from 'react';

const ThneedContext = React.createContext({});

class ThneedProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initCanvas: () =>  document.querySelector('canvas'),
			width: 600,
			height: 600,
			numberCount: 1,
			instanceCount: 1,
			round: 0,
			waitTime: 1,
			waitCount: 0,
			xCoordinate: 300,
			yCoordinate: 300,
			directionCount: 1,
			directions: [
				() => this.setState({ yCoordinate: this.state.yCoordinate + 50 }),
				() => this.setState({ xCoordinate: this.state.xCoordinate + 50 }),
				() => this.setState({ yCoordinate: this.state.yCoordinate - 50 }),
				() => this.setState({ xCoordinate: this.state.xCoordinate - 50 }),
			],
			spiralInit: (x) => {
				let runSesh = 0;
				while(runSesh < 144) {
					const color = (((this.state.nstanceCount-1) / x) === 0) ? 'green' : 'red';
					this.state.canvas.fill.style = color;
					this.state.canvas.font = "10px Arial";
					this.state.canvas.fillText(`{
						left: ${this.state.xCoordinate}, 
						top: ${this.state.yCoordinate},
						sesh: ${runSesh},
					}`, this.state.yCoordinate, this.state.xCoordinate);

					// c.fillRect(xCoordinate, yCoordinate, 50, 50);
					this.state.evolveScope();
					this.setState({
						instanceCount: this.state.instanceCount+1,
						numberCount: this.state.numberCount + x,
						runSesh: runSesh+1,
					});
				}
			},
			evolveScope: () => {
				if (this.state.instanceCount === 1){
					return this.state.changeDirection()
				}
				this.setState({ waitCount: this.state.waitCount + 1 });
				if (this.state.waitCount === this.state.waitTime) {
					this.setState({ round: this.state.round + 1 })
					this.setState({ waitCount: 0})
					this.state.changeDirection()
				} else {
					this.state.changeCoordinates();
				}
				if (this.state.round === 2){
					this.setState({ round: 0 })
					this.state({ waitTime: this.state.waitTime + 1})
				}
			},
			changeCoordinates: () => {
				switch(this.state.directionCount) {
					case 0:
						this.setState({xCoordinate: this.state.xCoordinate + 50});
						break;
					case 1:
						this.setState({ yCoordinate: this.state.yCoordinate + 50 });
						break;
					case 2:
						this.setState({ xCoordinate: this.state.xCoordinate - 50 });
						break;
					case 3:
						this.setState({ yCoordinate: this.state.yCoordinate - 50 });
						break;
					default:
						console.log("err");
				}
			},
			changeDirection: () =>  {
			if(this.state.instanceCount > 1){
				this.state.directionCount++;
			}
			if(this.state.directionCount >= 4){
				this.state.directionCount = 1;
			}
				return this.state.directions.directionCount;
			}		
		}
	}

	render() {
		return <ThneedContext.Provider value={this.state}>{this.props.children}</ThneedContext.Provider>;
	}
}

export { ThneedProvider, ThneedContext };
