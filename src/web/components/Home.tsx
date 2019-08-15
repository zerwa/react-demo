import * as React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component<{}> {
    constructor(p: {}) {
        super(p);
    }

    render() {
        return (
            <div>
                <h2>Hello World</h2>
                <Link to='/channels'>Go to channel list</Link>
            </div>
        );
    }
}