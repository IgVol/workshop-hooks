import React from "react";
import { useThing } from "./useThing";

export default () => {
  console.log(useThing, useThing())
  const thing = useThing();

  if (!thing) {
    return <div>Loading...</div>;
  }

  return <div>This is your thing: {thing}</div>;
};