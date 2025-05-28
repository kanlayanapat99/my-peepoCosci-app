import Features05Page from "@/components/features-05/features-05";

export default async function CoursePage() {
  const res = await fetch('https://api.codingthailand.com/api/course', {next: { revalidate: 3600 },});
  const apiInfo = await res.json();

  return (
    <>
      { apiInfo && <Features05Page courses={apiInfo.data} />}
    </>
  );
}
