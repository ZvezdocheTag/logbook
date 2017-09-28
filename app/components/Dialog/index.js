import React from 'react';
import Dialog from 'material-ui/Dialog';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogTravel extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={this.props.actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
            {this.props.inner}
        </Dialog>
      </div>
    );
  }
}