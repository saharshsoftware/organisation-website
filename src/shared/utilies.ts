// Reusable IntersectionObserver function
export const setupIntersectionObserver = (element: HTMLElement, callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback();
    }
  });

  observer.observe(element);
};

export const renderHTML = (blocks: any) => {
  console.log(blocks, "blockess")
  return blocks
    .map((block: any) => {
      // Handle different block types
      if (block.type === "paragraph") {
        return `<p>${renderInlineStyles(block.children)}</p>`;
      } else if (block.type === "heading") {
        return `<h${block.level}>${renderInlineStyles(block.children)}</h${
          block.level
        }>`;
      } else if (block.type === "list") {
        return renderList(block);
      } else if (block.type === "link") {
        return `<a href="${block.url}">${renderInlineStyles(
          block.children
        )}</a>`;
      }
      // Add more block types as needed
    })
    .join("");
};

const renderInlineStyles = (children: any) => {
  return children
    .map((child: any) => {
      if (child.bold) {
        return `<strong>${child.text}</strong>`;
      }
      if (child.type === "link") {
        return `<a href="${child.url}">${renderInlineStyles(
          child.children
        )}</a>`;
      }
      // Add more inline styles as needed
      return child.text;
    })
    .join("");
};

const renderList = (list: any) => {
  const listItems = list.children
    .map((item: any) => {
      return `<li>${renderInlineStyles(item.children)}</li>`;
    })
    .join("");
  return `<${list.format === "ordered" ? "ol" : "ul"}>${listItems}</${
    list.format === "ordered" ? "ol" : "ul"
  }>`;
};

export const handleQueryResponse = (res: any) => {
  if (res?.message) {
    console.log(res.response)
    throw new Error(res?.message);
  } else {
    return res;
  }
}

export const openLink = (url: string) => {
  window.open(url, "_blank");
}