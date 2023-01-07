import React from "react";
import { Helmet } from "react-helmet-async";

export default function Template() {
    return <>
        <Helmet>
            <title>Template</title>
            <meta name="description" content="Template"/>


        </Helmet>

        <div id="root">


            <h1>Template</h1>
            <p>This is a template.</p>
        </div>

    </>;
}