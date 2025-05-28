import Contact03Page from "@/components/contact-03/contact-03"

export default async function About() {
  const data = await fetch('https://api.codingthailand.com/api/version');
  const apiInfo = await data.json();
  return (
    <>
      <p>{JSON.stringify(apiInfo)}</p>
      {
          apiInfo && <p>{}</p>
      }
      < Contact03Page/>
    </>
  );
}
