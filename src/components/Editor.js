import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { ThneedProvider } from './contexts/Theed';
import { Canvas } from './Canvas';
import { Header, Icon, Image, Button, Label } from 'semantic-ui-react';
import GridLayout, { GridItem } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { 
  ImagePlaceholder,
  MediaParagraph,
  CenteredParagraph,
  Paragraph,
} from './components/wireframes'
import { Container, Col, Row } from 'react-grid-system' 

const ResponsiveGridLayout = WidthProvider(Responsive);

class Editor extends React.Component {
	constructor(props) {
    super(props);
    
    // if(window.localStorage.getItem('thneed-state')) {
    //   this.state = JSON.parse(window.localStorage.getItem('thneed-state'));
    // } else {
      this.state = {
        canMove: true,
        layouts: {
          lg: [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
          ]
        }
      };  
    // }    

	}//react-resizable-handle

	handleCick(e) {
		e.preventDefault();
		const layouts = {};
		layouts.lg = this.state.layouts.lg.map((layout) => {
			layout.static = !layout.static || true;
			return layout;
		});

		this.setState({ layouts });
		console.log(this.state.layouts);
  }

  toggleLock() {
    this.setState({ canMove: !this.state.canMove })
    
  }

  saveLayout(e, layout) {
    window.localStorage.setItem('thneed-state', JSON.stringify(this.state))
  }
  
  addComponent(e) {
    e.preventDefault()

    const newState = this.state.layouts.lg.concat({
      i: "n" + this.state.layouts.lg.length,
      x: (this.state.layouts.lg.length * 2) % 12,
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2
    })
    this.setState({
      layouts: {
        lg: newState,
      }
    })
  }

	render() {
		return (
			<ThneedProvider>
				<Menu style={{
          margin: 0
        }}>
					<Menu.Item>
						<Button as="div" labelPosition="right" onClick={(e) => this.toggleLock(e)}
>
							<Button color={(!this.state.canMove) ? "black" : "blue"}>
								{this.state.canMove ? 'Lock' : 'Unlock'}
							</Button>
							<Label as="a" basic color={(!this.state.canMove) ? "black" : "blue"} pointing="left">
                <Icon name={(!this.state.canMove) ? "lock" : "unlock" } />
								{(!this.state.canMove) ? "Locked" : "Unlocked"}
							</Label>
						</Button>
					</Menu.Item>
          <Menu.Item>
            <Button color="blue" onClick={(e) => this.addComponent(e)}>
              <Icon name={"add square"} />
              Add Component
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="green" onClick={this.saveLayout}>
              <Icon name={"save"} />
              Save Layout
            </Button>
          </Menu.Item>
				</Menu>
        <Container style={{minHeight: '100vh', borderLeft: 'solid 1px black', borderRight: 'solid 1px black'}}>
          <GridLayout preventCollision={true} onLayoutChange={this.saveLayout} isDraggable={this.state.canMove} isResizeable={this.state.canMove} className="layout" cols={12} rowHeight={100} width={1024}>
            {this.state.layouts.lg.map((layout) => (
              <div style={{overflow: 'hidden'}} key={layout.i} data-grid={layout}>
                <ImagePlaceholder />
              </div>
            ))}
          </GridLayout>
        </Container>
			</ThneedProvider>
		);
	}
}

export { Editor };
