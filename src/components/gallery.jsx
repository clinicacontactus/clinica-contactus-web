import React, { useEffect, useRef, useState } from "react";
import { Image } from "./image";

export const Gallery = ({ data = [] }) => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(calcSlidesToShow());
  const timeoutRef = useRef(null);

  function calcSlidesToShow() {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 600) return 1;
    if (w < 1024) return 2;
    return 3;
  }

  // Responsividade
  useEffect(() => {
    const onResize = () => setSlidesToShow(calcSlidesToShow());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const total = data.length;

  // 🔁 Clonamos imagens no início e no fim para criar o efeito "loop"
  const extendedData = [...data.slice(-slidesToShow), ...data, ...data.slice(0, slidesToShow)];
  const extendedLength = extendedData.length;

  // autoplay
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Quando chega no fim, volta rapidamente para o início (sem transição)
  const handleTransitionEnd = () => {
    if (index >= total + slidesToShow) {
      setIndex(slidesToShow);
    } else if (index <= 0) {
      setIndex(total);
    }
  };

  // Navegação manual
  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  const goTo = (i) => setIndex(i + slidesToShow);

  const transitionStyle = {
    transform: `translateX(-${(index * 100) / extendedLength}%)`,
    transition: index === slidesToShow - 1 || index === total + slidesToShow ? "none" : "transform 600ms ease",
    width: `${(extendedLength * 100) / slidesToShow}%`,
  };

  return (
    <section id="portfolio" className="gallery-root">
      <div className="container">
        <div className="section-title">
          <h2>Nosso Espaço</h2>
          <p>Conheça nosso ambiente</p>
        </div>

        <div className="carousel">
          <button className="carousel-nav prev" onClick={prev}>‹</button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={transitionStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((d, i) => (
                <div
                  key={`${d.title || "img"}-${i}`}
                  className="carousel-slide"
                  style={{ width: `${100 / extendedLength}%` }}
                >
                  <Image title={d.title} smallImage={d.smallImage} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav next" onClick={next}>›</button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={`dot-${i}`}
              className={`dot ${i === ((index - slidesToShow + total) % total) ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
