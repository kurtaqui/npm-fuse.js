# Typed Fuse.js

The type definition for [fuse.js](https://github.com/krisk/Fuse).

# Usage

```ts
import * as Fuse from "fuse.js";

let books = [{
  title: "Old Man's War"
  author: {
    firstName: "John",
    lastName: "Scalzi"
  }
}];
const fuse = new Fuse(books, { keys: ["title", "author.firstName"] });
```