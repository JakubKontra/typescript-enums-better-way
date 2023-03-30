# TypeScript Enum Examples
This repository contains two TypeScript code snippets that demonstrate how to use enums in TypeScript.
# Compiled 01-typescript-enum.ts code
```typescript
"use strict";
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
getColor(colors.red);
```
# Compiled 02-enum-from-const.ts code
```typescript
"use strict";
const colors = {
    red: 'red',
    green: 'green',
    blue: 'blue'
};
getColor(colors.red);
```
### Bundle size
117 bytes vs 84 bytes