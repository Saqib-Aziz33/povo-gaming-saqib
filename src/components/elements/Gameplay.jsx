const Gameplay = () => {
  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "black" }}>
      <video
        className="d-block mx-auto"
        width="auto"
        height="600px"
        src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
        controls
        autoPlay
        loop
        muted
      />
    </div>
  );
};
export default Gameplay;
