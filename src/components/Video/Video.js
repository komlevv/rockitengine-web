import s from "./Video.css"
import {createRef, useEffect} from "react";

const Video = ({
                 src, poster, loop, muted,
                 controls, autoplay, innerRef = createRef()
               }) => {
  useEffect(() => {
    // tbd, see https://github.com/facebook/react/issues/10389
    muted && innerRef.current.setAttribute('muted', '')
  })
  return (
    <video
      ref={innerRef}
      className={s.video}
      controls={controls}
      poster={poster}
      loop={loop}
      muted={muted}
      autoPlay={autoplay}
    >
      <source src={src} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;
