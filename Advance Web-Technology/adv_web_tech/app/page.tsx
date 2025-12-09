import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="row m-1">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/images/1.jpg"
                className="d-block w-100"
                width={600}
                height={500}
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/2.jpg"
                className="d-block w-100"
                width={600}
                height={500}
                alt="2"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/3.jpeg"
                className="d-block w-100"
                width={600}
                height={500}
                alt="3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <div className="card width: 18rem;">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
