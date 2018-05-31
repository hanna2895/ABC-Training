import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class AddCourseMaterials extends Component {
  constructor()  {
    super();
    this.state = {
      filesPreview: [],
      filesToBeSent: [],
      printcount: 10
    }
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('accepted files: ', acceptedFiles[0].name);
    const filesToBeSent = this.state.filesToBeSent;
    if (filesToBeSent.length < this.state.printcount) {
      filesToBeSent.push(acceptedFiles);
      const filesPreview = [];
      for (let i in filesToBeSent) {

        filesPreview.push(<div key={i}>
          {filesToBeSent[i][0].name}
          <MuiThemeProvider>
            <a href="#"><FontIcon className="material-icons customstyle" color={blue500} styles={{top:10,}}>clear</FontIcon></a>
          </MuiThemeProvider>
        </div>

        )
        // filesToBeSent[i][0] = filesToBeSent[i].btoa();
      }
      this.setState({filesToBeSent, filesPreview})
    }
    else {
      alert('too many files')
    }
  }

  handleClick = (e) => {
    console.log('clicked')
    this.props.addFile(this.state.filesToBeSent);
  }

  render() {
    console.log(this.state, 'this is state in AddCourseMaterials')
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <h2>Selected Files</h2>
          </div>
        </MuiThemeProvider>
        <center>
          <div>
            You can upload upto {this.state.printcount} files at a time.
          </div>
          <Dropzone onDrop={(files) => this.onDrop(files)}>
            <div> Try dropping some files here, or click select files to upload. </div>
          </Dropzone>

          <div>
            Files to be printed are:
            {this.state.filesPreview}
          </div>
        </center>
        <div>
          {this.state.printingmessage}
        </div>
        <MuiThemeProvider>
          <button style={style} onClick={(e) => this.handleClick(e)}> Upload Files </button>
        </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin: 15
};

export default AddCourseMaterials;
