
import get from 'lodash.get';

const util = {
    getValue(pageProps, obj, prop, defaultValue = null) {
        return get(pageProps, `${obj}.data.attributes.${prop}`, defaultValue);
    }
}

export default util;