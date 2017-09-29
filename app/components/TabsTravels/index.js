
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsTravels extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        value: 'a',
      };
    }
  
    handleChange = (value) => {
      this.setState({
        value: value,
      });
    };
  
    render() {
      return (
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label={this.props.tabAtitle} value="a">
            <div>
              {this.props.tabA}
            </div>
          </Tab>
          <Tab label={this.props.tabBtitle} value="b">
            <div>
            {this.props.tabB}
            </div>
          </Tab>
        </Tabs>
      );
    }
  }
