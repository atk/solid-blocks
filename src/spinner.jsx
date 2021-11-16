import "./base.css";
import "./spinner.css";
export const Spinner = (props) => (<progress class={props.class ? `sb-spinner ${props.class}` : "sb-spinner"} aria-busy="true" aria-live="polite" {...props}/>);
