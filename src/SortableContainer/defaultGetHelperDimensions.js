export default function defaultGetHelperDimensions({node}) {
  let width = Math.round(node.getBoundingClientRect().width);
  return {
    height: node.offsetHeight,
    width: width % 2 == 0 ? width : width +1,
  };
}
