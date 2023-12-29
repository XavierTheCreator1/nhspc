import Welcome from "@/app/components/home/Welcome";
import InfoPage from "@/app/components/InfoPage";

export default function HomePage() {
  return (
    <>
      <InfoPage>
        <main>
          <Welcome />
        </main>
      </InfoPage>
    </>
  );
}
