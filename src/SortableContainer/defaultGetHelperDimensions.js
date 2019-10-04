export default function defaultGetHelperDimensions({node}) {
  let width = Math.ceil(node.getBoundingClientRect().width);
  return {
    height: node.offsetHeight,
    width: width,
  };
}
