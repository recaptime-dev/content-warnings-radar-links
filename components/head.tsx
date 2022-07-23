import { Fragment, h } from "../deps.ts";

export function Head({ title }: { title: string } = { title: "Content Warnings | lorebooks.wip.la" }) {
  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <title>{title}</title>
    </Fragment>
  );
}
