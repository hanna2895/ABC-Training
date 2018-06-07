import React from 'react';
import {Card} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';


const StudentMaterialHolder = () => {
  return (
    <div className="upload-holder">
      <Card>
        <AppBar title="Your Assigned Materials" showMenuIconButton={false}/>
      </Card>
    </div>
  )
}

export default StudentMaterialHolder;
