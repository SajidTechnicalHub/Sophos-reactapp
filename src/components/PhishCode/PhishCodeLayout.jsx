import React, {useRef} from 'react'
import { Outlet } from "react-router-dom";
import PhishCodeHeader from './PhishCodeHeader';
import './PhishCodeLayout.css'
import PhishCodeSection1 from './PhishCodeSection1';
import PhishCodeSection2 from './PhishCodeSection2';
import PhishCodeSection3 from './PhishCodeSection3';
import PhishCodeSection4 from './PhishCodeSection4';

const PhishCodeLayout = () => {
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)
    const executeScroll1 = () => myRef1.current.scrollIntoView()
    const executeScroll2 = () => myRef2.current.scrollIntoView()
    const executeScroll3 = () => myRef3.current.scrollIntoView()
    const executeScroll4 = () => myRef4.current.scrollIntoView()
    return (
        <>
            <PhishCodeHeader 
            execute1={executeScroll1}
            execute2={executeScroll2}
            execute3={executeScroll3}
            execute4={executeScroll4}
            />
            
            <PhishCodeSection1 
            refProp={myRef1}/>
            <PhishCodeSection2 
            refProp={myRef2}/>
            <PhishCodeSection3 
            refProp={myRef3}/>
            <PhishCodeSection4 
            refProp={myRef4}/>

        </>
    )
}

export default PhishCodeLayout