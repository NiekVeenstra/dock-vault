import { AnchorIcon } from "@/components/Icons";

export function PhilosophySection() {
  return (
    <section className="philosophy" id="philosophy">
      <AnchorIcon className="philosophy__icon" />

      <blockquote>
        “Build trust slowly.
        <br />
        Protect it fiercely.”
      </blockquote>

      <p>The website is not a shop. It is a place.</p>
    </section>
  );
}
