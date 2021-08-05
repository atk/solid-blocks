import { Tag, TagGroup } from "./tag"

export const TagDocs = () => {
  return <>
    <h2 id="tag-docs">Tag / TagGroup</h2>
    <p>The tag component can show short items, like hash tags, either in a text or as part of a tag group. You can use it as if you would use a link or a span, depending on if you use a <code>href</code>. If you link to a <code>target</code>, rel noopener will be automatically added for security reasons, but you can overwrite the rel if need be.</p>
    <h3>Properties</h3>
    <pre>
      {`
TagProps {
  href?: string
  target?: string
  plain?: boolean
}`}
    </pre>
    <div class="example">
      <Tag>Unlinked tag</Tag> <Tag href="https://solidjs.com" target="_blank">Linked Tag</Tag> <Tag plain>Plain unlinked tag</Tag>
    </div>
    <pre>
      {`<Tag>Unlinked tag</Tag> <Tag href="https://solidjs.com" target="_blank">Linked Tag</Tag> <Tag plain>Plain unlinked tag</Tag>`}
    </pre>
    <p>The tag group is meant to provide a convenient wrapper around tags and fix the spacing if necessary:</p>
    <div class="example">
      <TagGroup>
        <Tag>JavaScript</Tag> <Tag href="https://solidjs.com" target="_blank">SolidJS</Tag> <Tag href="https://typescriptlang.org" target="_blank">TypeScript</Tag>
      </TagGroup>
    </div>
    <pre>
      {`
<TagGroup>
  <Tag>JavaScript</Tag>
  <Tag href="https://solidjs.com" target="_blank">SolidJS</Tag>
  <Tag href="https://typescriptlang.org" target="_blank">TypeScript</Tag>
</TagGroup>`}
    </pre>
    <hr/>
  </>
}
