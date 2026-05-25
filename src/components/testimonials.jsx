import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getItemsPerPage = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};

const removeOuterQuotes = (text = "") => text.replace(/^"+|"+$/g, "");

export const Testimonials = (props) => {
  const testimonials = useMemo(() => props.data || [], [props.data]);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pageCount = Math.max(1, Math.ceil(testimonials.length / itemsPerPage));

  const changePage = useCallback(
    (getNextPage) => {
      if (isAnimating || pageCount <= 1) return;

      setIsAnimating(true);

      window.setTimeout(() => {
        setPage((currentPage) =>
          typeof getNextPage === "function" ? getNextPage(currentPage) : getNextPage
        );
        window.setTimeout(() => setIsAnimating(false), 40);
      }, 180);
    },
    [isAnimating, pageCount]
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setPage(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pageCount <= 1) return undefined;

    const interval = window.setInterval(() => {
      changePage((currentPage) => (currentPage + 1) % pageCount);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [changePage, pageCount]);

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goToPrevious = () => {
    changePage((currentPage) => (currentPage - 1 + pageCount) % pageCount);
  };

  const goToNext = () => {
    changePage((currentPage) => (currentPage + 1) % pageCount);
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Avaliações</h2>
        </div>

        <div className="testimonials-carousel">
          {testimonials.length ? (
            <>
              <button
                type="button"
                className="testimonial-nav testimonial-nav-prev"
                onClick={goToPrevious}
                aria-label="Avaliação anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <div className={`testimonials-track ${isAnimating ? "is-changing" : ""}`}>
                {visibleTestimonials.map((d, i) => (
                  <div key={`${d.name}-${page}-${i}`} className="testimonial-card">
                    <div className="testimonial-card-header">
                      <img src={d.img} alt="" className="testimonial-avatar" />
                      <div>
                        <div className="testimonial-meta">{d.name}</div>
                        <div className="testimonial-source">Avaliação Google</div>
                      </div>
                    </div>
                    <p>{removeOuterQuotes(d.text)}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="testimonial-nav testimonial-nav-next"
                onClick={goToNext}
                aria-label="Próxima avaliação"
              >
                <ChevronRight size={24} />
              </button>

              <div className="testimonial-dots">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`testimonial-dot ${index === page ? "active" : ""}`}
                    onClick={() => changePage(index)}
                    aria-label={`Ir para grupo de avaliações ${index + 1}`}
                    aria-current={index === page ? "true" : "false"}
                  />
                ))}
              </div>
            </>
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
