import React, { Component } from 'react';

import { Container } from "reactstrap";

import ViandasNavBar from '../components/Navbars/ViandasNavBar';
import SearchBars from '../components/search/SearchBars';
import {FormattedHTMLMessage} from 'react-intl';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <ViandasNavBar onChangeLanguage={this.props.onChangeLanguage} history={this.props.history}/>
                <div
                    className="page-header section-dark"
                    style={{
                        backgroundImage:
                            "url(" + require("../assets/img/ingredientes-hamburguesas-planas-espacio-copia_23-2148235012.jpg") + ")"
                    }}
                >
                    <div className="filter" />
                    <div className="content-center mt-0">
                        <Container>
                            <div className="title-brand">
                                <h1 className="presentation-title">Viandas Ya</h1>
                            </div>
                            
                            <h2 className="presentation-subtitle text-center mt-0">
                            <FormattedHTMLMessage id="app.subtitle"
                                defaultMessage="Hace tu Pedido y recibilo en tu casa ya!"
                                description="Welcome header on app main page"
                            />
                                
                                
                            </h2>
                            
                            <SearchBars/>
                        </Container>
                    </div>
                    <h6 className="category category-absolute">
                    <FormattedHTMLMessage id="app.coded"
                        defaultMessage="Diseñado y codeado por Grupo C2"
                    />

                    </h6>

                </div>

            </>
        );
    }
}

