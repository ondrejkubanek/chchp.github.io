import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Jejda!</h1>
            <p>Nastala chyba.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}