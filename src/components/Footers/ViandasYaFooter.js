import React, { Component } from "react";

export default class ViandasYaFooter extends Component {
    render() {
        return (
            <div className="footer register-footer text-center">
                <h6>
                    © {new Date().getFullYear()}, made with{" "}
                    <i className="fa fa-heart heart" /> by Viandas Ya
                </h6>
            </div>

        );
    }
}