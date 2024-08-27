export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = "" }) {
  return <div className={`card-header ${className}`}>{children}</div>;
}
export function CardBody({ children, className = "", style = {} }) {
  return (
    <div className={`card-body ${className}`} style={style}>
      {children}
    </div>
  );
}
export function CardTittle({ children, className = "" }) {
  return <h5 className={`card-title ${className}`}>{children}</h5>;
}
export function CardText({ children, className = "", style = {} }) {
  return (
    <p style={style} className={`card-text ${className}`}>
      {children}
    </p>
  );
}
export function CardImg({
  children,
  className = "",
  src = "",
  style = {},
  alt = "",
}) {
  return (
    <img src={src} style={style} className={`card-img ${className}`} alt={alt}>
      {children}
    </img>
  );
}
export function CardFooter({ children, className = "" }) {
  return <div className={`card-footer ${className}`}>{children}</div>;
}
