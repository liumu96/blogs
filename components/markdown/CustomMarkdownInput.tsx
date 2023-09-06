import { JSX, useMemo } from "react";
import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown";

export function CustomMarkdownInput(
  props: JSX.IntrinsicAttributes & MarkdownInputProps
) {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(() => {
    return {
      options: {
        toolbar: [
          "bold",
          "italic",
          {
            name: "heading",
            className: "fa fa-header",
            title: "Headers",
            children: [
              "heading-smaller",
              "heading-bigger",
              "heading-1",
              "heading-2",
              "heading-3",
            ],
          },
          "|",
          "code",
          "quote",
          "unordered-list",
          "unordered-list",
          "table",
          "link",
          // "image",
          "upload-image",
          "horizontal-rule",
          "preview",
          "fullscreen",
        ],
        // more options available, see:
        // https://github.com/Ionaru/easy-markdown-editor#options-list
      },
      // more props available, see:
      // https://github.com/RIP21/react-simplemde-editor#react-simplemde-easymde-markdown-editor
    };
  }, []);

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
}
