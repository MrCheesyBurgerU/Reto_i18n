import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import 'bootstrap/dist/css/bootstrap.min.css';

import JobsList from "./components/jobslist";

const language = navigator.language;
const isSpanish = language.startsWith('es');

const locale = isSpanish ? 'es-ES' : 'en-US';
const messages = isSpanish ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale = {locale} messages={messages}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")
);

