import { SectionHeading } from "@/components/SectionHeading";

export function ArtifactWallSection() {
  return (
    <section className="artifact-wall">
      <div className="artifact-wall__inner">
        <SectionHeading title="Archive markers" />
        <div className="artifact-grid">
          <article>
            <span>Founding chapter</span>
            <strong>In progress</strong>
          </article>
          <article>
            <span>Current voyage</span>
            <strong>OP12</strong>
          </article>
          <article>
            <span>Archive status</span>
            <strong>Growing</strong>
          </article>
          <article>
            <span>Guiding principle</span>
            <strong>Preserve first</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
