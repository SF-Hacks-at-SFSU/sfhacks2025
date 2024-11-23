import SponsorMosaic from "@/components/sponsors/SponsorGrid";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <h2 className="text-[#fff5d9] text-4xl font-bold text-center mb-12 font-sans drop-shadow-[0_0.1em_0.5em_#16133d] mt-10">
        Our Sponsors
      </h2>
      <SponsorMosaic />
    </main>
  );
}
