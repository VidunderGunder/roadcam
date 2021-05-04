import { CSSProp } from 'styled-components';
import 'styled-components/cssprop';

declare module 'react' {
  // eslint-disable-next-line
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}