import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StyledEngineProvider} from '@mui/material';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

// third party style
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = createRoot(document.getElementById('root'));

root.render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </BrowserRouter>
    </StyledEngineProvider>
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
