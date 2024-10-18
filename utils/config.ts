const config = {
  NFT_META_KEY: process.env.NEXT_PUBLIC_NFT_META_KEY || "12234566788",
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  WEBHOOK_SECRET: process.env.NEXT_PUBLIC_WEBHOOK_SECRET || "",
  HIRO_API_KEY:
    process.env.NEXT_PUBLIC_HIRO_API_KEY || "fd33a966987f6d8fac99786d93ba7340",
};

export default config;
