function SectionTitle({ eyebrow, title, highlight, description, centered = true }) {
  return (
    <div
      className={`noir-section-title ${
        centered ? 'text-center' : 'text-start'
      }`}
    >
      {eyebrow && (
        <span className="noir-section-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2 className="noir-section-heading">
        {title} <span>{highlight}</span>
      </h2>

      {description && (
        <p className="noir-section-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;