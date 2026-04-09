type SectionHeadingProps = {
  readonly title: string
  readonly subtitle?: string
  readonly id?: string
}

export const SectionHeading = ({ title, subtitle, id }: SectionHeadingProps) => (
  <div className="mb-12" id={id}>
    <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
)
