declare module '*.png';
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}