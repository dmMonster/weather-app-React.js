import React, {Component} from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import './spinner.scss'
class Spinner extends Component {
    render() {
        return (
            <div className={"container spinner"}>
                <FadeLoader
                    size={250}
                    color={"#ffffff"}
                    loading={true}
                />
            </div>
        );

    }
}

export default Spinner;