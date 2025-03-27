import {useSelector} from "react-redux";
import {marked} from "marked";

function MarkdownPreview () {
    const text = useSelector((state) => state.text);

    return (
        <div id="preview" className="previewer" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
    );
};

export default MarkdownPreview;