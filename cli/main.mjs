#!/usr/bin/env node

import { createCLI } from "./cli.mjs";

const cli = createCLI({
  name: "nudocs",
  description: "NuJS Docs Tool",
  setup: {
    defaults: {
      github: "nujs",
      themeColor: "amber",
    },
  },
});

cli.runMain();
