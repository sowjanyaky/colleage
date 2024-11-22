import React, { Component } from 'react';

export default class Navbar2 extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="1">
                    <tbody>
                        <tr>
                            <th>Home</th>
                            <th>{this.props.aname}</th>
                            <th>Contact</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            );
}
}