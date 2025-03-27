import {useSelector, useDispatch} from "react-redux";
import React from "react";
import {setText} from "./textSlice.js";

function MarkdownUserInput () {

    const dispatch = useDispatch();
    const text = useSelector((state) => state.text);

    return (
        <div className="userInput">
            <textarea
                id="editor"
                value={text}
                onChange={(e) => dispatch(setText(e.target.value))}
            />
        </div>
    )
};

export default MarkdownUserInput;
