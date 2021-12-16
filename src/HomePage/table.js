
import Table from 'rc-table';
import React, { Component } from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';


export default class WTable extends Component {
    render(){
      const sampleData = `Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb 
      Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4 Mazda RX4 
      Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4 Datsun`;

      // var fs = require('fs');

      // function readModuleFile(path, callback) {
      //     try {
      //         // var filename = require.resolve(path);
      //         console.log(path);
      //         fs.readFile(path, 'utf8', callback);
              
      //     } catch (e) {
      //         callback(e);
      //     }
      // }
      
      // readModuleFile('/D:/healthdata.txt', function (err, words) {
      //     // console.log(require.resolve('index.js'));
      //     console.log(err);
      //     console.log(words);
      //     // alert(typeof words);
      // });

      // console.log(typeof words); // string
      
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              width: 100,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              width: 100,
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              width: 200,
            },
            {
              title: 'Operations',
              dataIndex: '',
              key: 'operations',
              render: () => <a href="#">Delete</a>,
            },
          ];
        
          const data = [
            { name: 'Jack', age: 28, address: 'some where', key: '1' },
            { name: 'Rose', age: 36, address: 'some where', key: '2' },
          ];
        
        return (
          <div>
          <Table columns={columns} data={data} />
          <CsvToHtmlTable data={sampleData} csvDelimiter="," tableClassName="table table-striped table-hover"/>
          </div>
         
          // <div>Can you see?</div>
        );
    }
    

}
 