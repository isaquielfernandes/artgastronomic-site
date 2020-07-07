import 'primereact/resources/themes/luna-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter>
           <Component {...pageProps} />
        </AnimatePresence>
   )
}
