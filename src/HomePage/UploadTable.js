import React from 'react';
import { render } from 'react-dom';
import { CsvToHtmlTable } from 'react-csv-to-table';
import ReactFileReader from 'react-file-reader';

const sampleData = `
Item1,Item2,Item3
1,2,3
`;

export default class UploadTable extends React.Component {
  state={
    csvData: null
  };

  render(){
    return <div>
      <ReactFileReader 
        multipleFiles={false}
        fileTypes={[".csv"]} 
      handleFiles={this.handleFiles}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
      <CsvToHtmlTable
        data={this.state.csvData || sampleData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    </div>;
  } 
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  (e) => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

}

// render(<UploadTable />, document.getElementById('root'));
