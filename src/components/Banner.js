import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import headerImg from "../assets/img/banner-img.jpg";
import { saveAs } from "file-saver";
import CV from "../assets/img/Shahriar_Alvi_CV.pdf";

export const Banner = () => {
  // serial no of word that is being typed in
  const [loopNum, setLoopNum] = useState(0);

  // the world that is being typed out
  const [isDeleting, setIsDeleting] = useState(false);

  // words that will be typed in/out
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];

  // current text
  const [text, SetText] = useState("");

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000; // how much time passes between each print

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    // adds or removes letter from display
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    SetText(updatedText);

    if (isDeleting) {
      // deleting is faster this way
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleDownload = () => {
    saveAs(CV, "Shahriar_Alvi_CV.pdf");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-top">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {" "}
              {`hi I am Shahriar Alvi`}
              <span className="wrap d-block">{text}</span>
            </h1>
            <p>
              Hey there, I'm Shahriar Alvi, a software engineering undergrad
              with a passion for diving into the world of software engineering.
              But let's face it, life's about more than just coding, right?
              <br />
              I'm all about finding that sweet spot between pixels — whether I'm
              freezing life's best moments behind a camera lens, embarking on
              epic gaming quests, or getting lost in the pages of a good book or
              movie. And yeah, balance is key. So, if you're up for geeking out
              over tech, sharing gaming tips, or just vibing to some music in Spotify, I'm
              your go-to person. <br />
              Let's dive into this awesome journey together!
            </p>
            <button
              onClick={() => {
                handleDownload();
              }}
            >
              Check My CV <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
