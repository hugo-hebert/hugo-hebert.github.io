
import get from 'lodash.get';

const util = {
  getValue(pageProps, obj, prop, defaultValue = null) {
    return get(pageProps, `${obj}.data.attributes.${prop}`, defaultValue);
  },

  getObject(pageProps, obj, defaultValue = null) {
    return get(pageProps, `${obj}.data.attributes`, defaultValue);
  }

}

export default util;