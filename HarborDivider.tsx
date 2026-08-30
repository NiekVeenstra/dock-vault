import { SectionHeading } from "@/components/SectionHeading";

const archives = [
  {
    eyebrow: "Ongoing voyage",
    title: "Full Playset Project",
    description: "Four copies of every playable card, gathered patiently over time.",
    progress: 18,
  },
  {
    eyebrow: "Current master set",
    title: "OP12 Master Set",
    description: "A complete record of the set, from the first card to the final gap.",
    progress: 35,
  },
  {
    eyebrow: "Private archive",
    title: "Founder&apos;s Archive",
    description: "Milestones and pieces kept for their story rather than their price.",
    status: "Growing",
  },
];

export function ArchiveProgressSection() {
  return (
    <section className="archive-progress">
      <div className="archive-progress__inner">
        <SectionHeading title="The Founder&apos;s Collection" />

        <div className="archive-list">
          {archives.map((archive) => (
            <article className="archive-record" key={archive.title}>
              <div className="archive-record__heading">
                <div>
                  <span>{archive.eyebrow}</span>
                  <h2 dangerouslySetInnerHTML={{ __html: archive.title }} />
                </div>
                <b>
                  {archive.progress !== undefined
                    ? `${archive.progress}%`
                    : archive.status}
                </b>
              </div>
              <p>{archive.description}</p>
              {archive.progress !== undefined ? (
                <div
                  className="archive-track"
                  aria-label={`${archive.progress}% complete`}
                >
                  <i style={{ width: `${archive.progress}%` }} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
