declare module '*.png';
declare module '*.jpg';
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}