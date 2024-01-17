import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { colorAtom } from "../store/atoms/colorAtom";
import { hexAtom } from "../store/atoms/hexAtom";
import React from "react";

export default function ColorChangerPage() {
    const color = useRecoilValue(colorAtom);
    const [useHexCode, setUseHexCode] = useRecoilState(hexAtom);
    function toggleUseHexCode() {
        setUseHexCode(!useHexCode);
    }

    return <>
        <div className="main-div" style={{
            backgroundColor: color,
            width: '100%',
            height: '100%',
            position: 'absolute'
        }}>
            <p className="paragraph">Pick your Color</p>
            {useHexCode ? <HexForm /> : <ColorPicker />}
        </div>
        <button className='toggle-button' onClick={toggleUseHexCode}>{useHexCode ? 'Use Palatte' : 'Use Hex-Code'}</button>
    </>
}

function ColorPicker() {
    const setColor = useSetRecoilState(colorAtom);

    function handleClick(event) {
        setColor(event.target.value);
    }

    return <div className="color-picker-div">
        <ul className="color-picker">
            <button onClick={handleClick} style={{ backgroundColor: 'black', color: 'white' }} value='black' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }} value='blue' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'red' }} value='red' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'green' }} value='green' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'yellow' }} value='yellow' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'orange' }} value='orange' ></button>
            <button onClick={handleClick} style={{ backgroundColor: 'purple' }} value='purple' ></button>
        </ul>
    </div>
}

function HexForm() {
    const [color, setColor] = useRecoilState(colorAtom);
    const [hexCode, setHexCode] = React.useState('');

    function handleChange(event) {
        setHexCode(event.target.value)
        setColor('#' + hexCode);

    }

    return <div className="hex-div">
        <label htmlFor="code">HEX CODE</label>
        <input id="code" type="text" onChange={handleChange} value={hexCode} />
    </div>
}