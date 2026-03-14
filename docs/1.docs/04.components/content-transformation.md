# Content Transform

> Discover how NuDocs transforms content so you can focus on writing documentation.

<!-- automd:file src="../../.partials/warn.md" -->

> [!IMPORTANT]
> NuDocs is currently intended for NuJS docs only and is not fully customizable yet. <br>
> Contributions are more than welcome but please consider that this project is not ready yet to be used. <br>
> We don't guarantee stability yet and it is expected that it doesn't work time to time.

<!-- /automd -->

## Github Notes

https://github.com/orgs/community/discussions/16925

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.
```

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

```md
> [!TIP]
> Optional information to help a user be more successful.
```

> [!TIP]
> Optional information to help a user be more successful.

```md
> [!IMPORTANT]
> Crucial information necessary for users to succeed.
```

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

```md
> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.
```

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

```md
> [!CAUTION]
> Negative potential consequences of an action.
```

> [!CAUTION]
> Negative potential consequences of an action.

## Auto Code Groups

If you have code blocks right after each other, they will be grouped together using [`code-group`](https://ui.nuxt.com/pro/prose/code-group).

````md
```json [package.json]
{
  "scripts": {
    "dev": "nudocs dev"
  }
}
```

```ts [server/api/hello.get.ts]
export default defineEventHandler(() => {
  return {
    hello: "world",
  };
});
```

```html [index.html]
<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>
```
````

```json [package.json]
{
  "scripts": {
    "dev": "nudocs dev"
  }
}
```

```ts [server/api/hello.get.ts]
export default defineEventHandler(() => {
  return {
    hello: "world",
  };
});
```

```html [index.html]
<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>
```

## Steps

Generate steps by using standard markdown numbered lists!

> [!IMPORTANT]
> In order to generate this component, you need to have content inside at least one of the lists. The list can't be a child of another component & also any content within a Markdown list will need at least 2 tabs to be considered as a child of the list.

```md
1. Install Package

   ::note
   Please note that steps only work with numbered lists and is not within children.
   ::

   :pm-install{name="nudocs"}

2. Run development server

   :pm-run{script="nudocs"}

3. Done ✅
```

1. Install Package

   ::note
   Please note that steps only work with numbered lists and is not within children.
   ::

   :pm-install{name="nudocs"}

2. Run development server

   :pm-run{script="nudocs"}

3. Done ✅

## Automd

Enable `automd` in `.config/docs.yaml` to transform markdown files containing `<!-- automd:... -->` blocks while content is parsed.

Custom generators live in `.config/automd.ts`:

```ts [.config/automd.ts]
import { defineGenerator, type Config } from "automd";

export default <Config>{
  generators: {
    test: defineGenerator({
      name: "test",
      async generate() {
        return {
          contents: `automd works!`,
        };
      },
    }),
  },
};
```

Built-in generators such as `badges`, `file`, and `jsdocs` work out of the box. Custom generators only run when the block name matches the registered key:

```md
<!-- automd:badges color="yellow" name="defu" -->

[![npm version](https://img.shields.io/npm/v/defu?color=yellow)](https://npmjs.com/package/defu)
[![npm downloads](https://img.shields.io/npm/dm/defu?color=yellow)](https://npm.chart.dev/defu)

<!-- /automd -->

<!-- automd:test -->

automd works!

<!-- /automd -->
```

In the example above, `automd:badges` uses the built-in `badges` generator, while `automd:test` runs the custom generator defined in `.config/automd.ts`.

## Config References

Generate beautiful references for your configuration files by just using markdown!

> [!TIP]
> If you use [automd:jsdocs](https://automd.unjs.io/generators/jsdocs), you can reference the schema file directly! Check out this example from the [config](/config) page.

```md
### `$schema`

- **Type**: `string`

### `automd`

- **Type**: `boolean`

Enable integration with https://automd.unjs.io

### `buildCache`

- **Type**: `boolean`

Enable build cache (experimental)

### `description`

- **Type**: `string`

The description of the documentation site.
```

### `$schema`

- **Type**: `string`

### `automd`

- **Type**: `boolean`

Enable integration with https://automd.unjs.io

### `buildCache`

- **Type**: `boolean`

Enable build cache (experimental)

### `description`

- **Type**: `string`

The description of the documentation site.

> [!TIP]
> Do you have an idea for a new content transformation, feel free to [open an issue](https://github.com/nujs-dev/nudocs/issues/new?assignees=&labels=pending+triage&projects=&template=feature-request.yml)!
