import React, { Component } from 'react'
// 这里引入的是本地文件而不是下载的模块，是为了适配React@16.x的版本，这一块在后面会讲到
import FileUpload from 'react-fileupload'
//https://www.bilibili.com/video/BV1J5411h7vN?p=155
export default class FileUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        /*set properties*/
        const options={
            baseUrl: 'http://127.0.0.1:8080/upload',
            param: {
                _c: 'file',
                _a: 'UploadFile'
            },
            fileFieldName: 'upload_file',
            dataType: 'json',
            chooseAndUpload:true,
            uploadSuccess: (res)=>{
                // this.props.onSuccess(res.data)
                alert(res.data)
                console.log(res.data)
            },
            uploadError: (err)=>{
                // this.props.onError(err.message||'上传失败')
                alert(err.message)
                console.log(err.message)
            }
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={this.options}>
                <button ref="chooseBtn">Chose file</button> &nbsp;&nbsp;&nbsp;
                <button ref="uploadBtn">upload</button>
            </FileUpload>
        )
    }
}