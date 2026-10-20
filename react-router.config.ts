import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true, //ESTO EN TRUE ACTIVA EL SERVER SIDE RENDRING

  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "auth/testing", //Products
      "products/iphone",
      "products/celular",
      "products/peras",
      "products/mesas",
      "products/tetera",
    ];
  },
} satisfies Config;
