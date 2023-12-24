import Repos from "@/components/Repos";

export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <Repos sort="rating" minimumVotes={1} />
    </main>
  );
}
