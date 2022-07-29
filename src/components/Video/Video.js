import s from "./Video.css"

const Video = ({
                   src, poster, loop, muted,
                   controls, autoplay, innerRef
               }) => (
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

export default Video;