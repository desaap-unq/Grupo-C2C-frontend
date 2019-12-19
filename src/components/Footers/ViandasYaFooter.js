import React, { Component } from "react";
import {FormattedHTMLMessage} from 'react-intl';

export default class ViandasYaFooter extends Component {
    render() {
        return (
            <div className="footer register-footer text-center">

                <h6>
                    © {new Date().getFullYear()},
                    <FormattedHTMLMessage id="app.madeWith"
                        defaultMessage=" Echo con "
                    />
                     
                    <i className="fa fa-heart heart" /> 
                    <FormattedHTMLMessage id="app.byVianda"
                        defaultMessage=" por Viandas Ya"
                    />
                </h6>
            </div>

        );
    }
}