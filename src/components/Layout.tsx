import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: Record<string, string>;
  };
}

export default function Layout({ children, pageContext }: LayoutProps) {
  const { title, date } = pageContext.frontmatter;

  return (
    <article>
      <h1>{title}</h1>
      <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      {children}
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </article>
  );
}
