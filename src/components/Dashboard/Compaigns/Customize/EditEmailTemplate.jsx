import React, { useRef, useEffect, useState } from "react";
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import 'suneditor/src/assets/css/suneditor.css'
import Templates from '../../Email/EmailTemplates/Templates'
// import Content from "./EditorDemo";
import { ContentDemo, Content } from "./EditorDemo";
import { LinkedInContent } from "./LinkedInTemplate";

const EditEmailTemplate = ({initialValue}) => {

   

    return (
        <div>
            {/* <p> My Other Contents </p> */}
            <SunEditor
                name="my-editor"
                autoFocus={true}
                // width="99%"
                height="100%"
                setContents= {ContentDemo}
                setOptions={{
                    buttonList: [
                        [
                            'undo',
                            'redo',
                            'preview',
                            'bold',
                            'underline',
                            'italic',
                            'font',
                            'fontSize',
                            'strike',
                            'subscript',
                            'superscript',
                            'removeFormat',

                            'fontColor',
                            'hiliteColor',
                            'indent',
                            'outdent',
                            'align',
                            'list',
                            'horizontalRule',
                            'table',
                            'link',
                            'video',
                            'audio',
                            'image',
                            'fullScreen',
                            'showBlocks',
                            'codeView',
                            'paragraphStyle',
                            'template',
                            'textStyle',
            
                        ]

                    ]
                }}
            

            />
            {/* <div>{props.template}</div> */}
            {/* <button onClick={() => onSubmit(content)}>Submit</button> */}
        </div>



    );
};
export default EditEmailTemplate;