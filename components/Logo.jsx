import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl font-bold select-none">
        D<span className="text-primary">.</span>K
        <span className="text-primary">.</span>
      </h1>
    </Link>
  );
}
