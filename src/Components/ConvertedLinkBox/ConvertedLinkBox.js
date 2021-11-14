import "./ConvertedLinkBox.css";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function ConvertedLinkBox(props) {

    function copyLink() {
        var copyText = document.getElementById("playlistLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }

    return (
        <div className="convertedLinkBox align-items-center">
            <h5>Converted Link</h5>
            {props.error ? <p>** Alert: a few songs could not be found on selected platform click here to see more details</p> : null}
            <Row>
                <Col>
                    <Form.Control value={props.link} id="playlistLink" />
                </Col>
                <Col>
                    <Button variant="secondary" id="playlistCopy" onClick={() => copyLink()}>Copy</Button>
                </Col>
            </Row>
        </div>
    );
}