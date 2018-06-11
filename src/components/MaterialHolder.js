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
    console.log(fileArray[0][0])
    console.log(fileArray[0][0].name)
    // formData.append('files', fileArray[0][0])
    // // formData.
    // console.log(formData, 'this is the form data')
    //

    // what if I send it over as json? because it's not getting what it needs out of formData



    const form = await fetch('https://protected-reaches-40551.herokuapp.com/files/', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: fileArray[0][0].name,
        file: fileArray[0][0].preview
      })
    })
      // .then(response => response.json())
      // .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <AddCourseMaterials addFile={this.addFile}/>
    )
  }
}

export default MaterialHolder;
