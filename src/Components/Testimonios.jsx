export function Testimonios({ img, desc, name, cargo }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body text-center">
          <img
            src={img}
            alt={name}
            className="rounded-circle mb-3 img-fluid"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <p className="text-muted fst-italic">{desc}</p>
          <h5 className="text-primary mb-0">{name}</h5>
          <p className="text-muted small">{cargo}</p>
        </div>
      </div>
    </div>
  );
}
