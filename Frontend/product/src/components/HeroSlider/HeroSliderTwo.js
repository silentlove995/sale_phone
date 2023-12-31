import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: true
};

const HeroSliderTwo = ({ heroSliderData }) => {
  return (
    <div className="hero-slider space-pb--r100 space-pt--25">
      <Container>
        <Row>
          <Col lg={9} className="ms-auto">
            <div className="hero-slider__wrapper">
              {!!heroSliderData?.length ? (
                <Swiper options={params} navClass="hero-slider-two">
                  {heroSliderData.map((single, key) => (
                    <SwiperSlide
                      className="hero-slider__slide bg-image"
                      style={{
                        backgroundImage: `url(${single.backgroundImage})`
                      }}
                      key={key}
                    >
                      <div className="hero-slider__content-wrapper hero-slider__content-wrapper--round-space">
                        <Col lg={8}>
                          <div className="hero-slider__content overflow-hidden">
                            <h5 className="mb-3 font-weight-light sub-title">
                              {single.subtitle}
                            </h5>
                            <h2 className="space-mb--20 title">
                              {single.title}
                            </h2>
                            <Link
                              href={single.url}
                              className="btn btn-fill-out rounded-0 text-uppercase slider-link">
                              
                                Shop Now
                              
                            </Link>
                          </div>
                        </Col>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSliderTwo;
