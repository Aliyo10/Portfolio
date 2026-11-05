import { profile } from "./data/profile";

export default function Home() {
  return (
    <section className="section">
      <div className="container-page">
        <h1 className="text-5xl font-bold uppercase">{profile.fullName}</h1>
      </div>
    </section>
  );
}
