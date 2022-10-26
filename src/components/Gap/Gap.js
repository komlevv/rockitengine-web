// this is a hack for edge cases where animated group of components
// does not have a parent container and is mapped directly into content[].
// intended gap is 30px, so 10px padding from local css + 20px css grid gap
// using this to speed up release, but ideally a separate component should
// be generated for such cases, and GridContainer should set padding-bottom
// for direct children
const Gap = ({ size = 10 }) => <div style={{ paddingBottom: `${size}px` }} />;

export default Gap;
