const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ecomm-demo.now.sh"
    : "http://localhost:3000";

export default baseUrl;
