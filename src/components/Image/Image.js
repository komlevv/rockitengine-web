const Image = ({ loading = 'lazy', alt = '', src, innerRef, ...props }) => (
  <img ref={innerRef} src={src} alt={alt} loading={loading} {...props} />
);

export default Image;
