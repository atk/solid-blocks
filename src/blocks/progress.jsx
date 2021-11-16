import "./base.css";
import "./progress.css";
export const Progress = (props) => (<progress aria-busy={props?.value !== props?.max} aria-live="polite" {...props} class={props.class ? `sb-progress ${props.class}` : "sb-progress"}/>);
