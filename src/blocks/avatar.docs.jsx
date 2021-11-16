;import { Avatar, AvatarBadge, AvatarGroup } from "./avatar"
import { Checkbox } from './checkbox';
import { createSignal } from "solid-js";

export const AvatarDocs = () => {
  const [expanded, setExpanded] = createSignal(false);
  return <>
    <h2 id="avatar-docs">Avatar</h2>
    <p>The &lt;Avatar&gt; component is meant to represent individuals, either by image or their name's initials. By default, the background will be selected randomly out of 8 colors; direct repetitions are avoided.</p>
    <h3>Properties</h3>
    <pre>
      {`
AvatarProps {
  img?: string;
  name?: string;
  fallback?: JSX.Element;
}
`}
    </pre>
    <div class="example">
      without props: <Avatar />, with fallback: <Avatar fallback="😀"/>, with name: <Avatar name="Solid Blocks" /> and with image: <Avatar img="https://avatars.githubusercontent.com/u/220405?s=60&v=4" name="Alex Lohr" />
    </div>
    <hr/>
    <h2 id="avatarbadge-docs">AvatarBadge</h2>
    <p>Will present a badge at the lower right corner of the avatar.</p>
    <div class="example">
      <Avatar img="https://avatars.githubusercontent.com/u/220405?s=60&v=4" name="Alex Lohr"><AvatarBadge /></Avatar>
    </div>
    <hr/>
    <h2 id="avatargroup-docs">AvatarGroup</h2>
    <h3>Properties</h3>
    <pre>
      {`
AvatarGroupProps {
  aria-expanded?: boolean;
}
`}
    </pre>
    <h4>Effect</h4>
    <p>An avatargroup allows a condensed view of 2 or more avatars that can be extended with the <code>aria-expanded</code>-Attribute.</p>
    <Checkbox onchange={() => setExpanded(e => !e)}> aria-expanded</Checkbox><br/><br/>
    <div class="example">
      <AvatarGroup aria-expanded={expanded()}>
        <Avatar img="https://avatars.githubusercontent.com/u/220405?s=60&v=4" name="Alex Lohr" />
        <Avatar name="Solid Blocks" />
        <Avatar/>
        <Avatar/>
      </AvatarGroup>
      {" or with a data-plus attribute to set the last item manually (which obviously does not work if expanded): "}
      <AvatarGroup data-plus={"+lots"}>
        <Avatar img="https://avatars.githubusercontent.com/u/220405?s=60&v=4" name="Alex Lohr" />
        <Avatar name="Solid Blocks" />
        <Avatar/>
        <Avatar/>
      </AvatarGroup>
    </div>
    <hr/>
  </>
}