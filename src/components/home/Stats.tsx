import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { stats } from "@/lib/data";
import { yearsOfExperience } from "@/lib/site";

export function Stats({ tone = "light" }: { tone?: "light" | "sand" }) {
  const items = [{ value: yearsOfExperience(), suffix: "+", label: "Yıllık deneyim" }, ...stats];

  return (
    <section className={tone === "sand" ? "bg-sand" : ""}>
      <Container>
        <Stagger className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {items.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`px-4 py-12 md:px-8 md:py-16 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-serif text-5xl font-medium text-ink md:text-6xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
