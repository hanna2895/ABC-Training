import React, { Component } from 'react';
import AddCourseMaterials from './AddCourseMaterials';

class MaterialHolder extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  addFile = async(fileArray) => {
    console.log('add file is being called')
    console.log(fileArray, 'these are the received viles')
    // const formData = new FormData();
    // formData.append('files', fileArray[0][0])
    // // formData.
    // console.log(formData)
    //
    // await fetch('http://localhost:3000/file/', {
    //   method: "POST",
    //   credentials: 'include',
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .catch(error => console.error('Error:', error))
    //   .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <AddCourseMaterials addFile={this.addFile}/>
    )
  }
}

export default MaterialHolder;
