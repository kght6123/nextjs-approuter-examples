import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
  feed: React.ReactNode;
}) {
  return (
    <>
      <h1>intercepting</h1>
      {props.children}
      {props.feed}
    </>
  );
}
