import React, { Component, useState } from 'react';
//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
// export default class FileUploader2 extends Component{
    // render(){
//必须有const的函数才能作为类?
const FileUploader2 = () => {
        const [selectedFile, setSelectedFile] = useState(); //变量是从哪里来的?
	    const [isFilePicked, setIsFilePicked] = useState(false);
        const changeHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0]);
            var reader = new FileReader();
            reader.readAsText(event.target.files[0]);
            setIsFilePicked(true);
        };
    
        const handleSubmission = () => {
            const formData = new FormData();

            formData.append('File', selectedFile);
    
            fetch(
                'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
                {
                    method: 'POST',
                    body: formData,
                    headers:{'Access-Control-Allow-Origin': 'http://localhost:8080'},
                    mode: "no-cors",
                }
            )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        };
        return(
            <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		    </div>
        );
    }
	
// }

export default FileUploader2;