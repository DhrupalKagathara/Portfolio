import { Button } from "../components/ui/Button";
import Link from "next/link";
import FuzzyText from "../components/ui/FuzzyText";

export default function Page() {
  return (
    <div className="h-[500px] grid place-content-center">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        not found
      </FuzzyText>
      <Button
        className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r border-transparent text-white font-semibold shadow-lg transition-colors duration-200"
        asChild
      >
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}
