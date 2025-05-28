import Contact03Page from "@/components/contact-03/contact-03"

export default async function About() {
  const data = await fetch('https://api.codingthailand.com/api/version', {next: {revalidate: 3600}});
  const apiInfo = await data.json();
  return (
    <>
      {
          apiInfo && < Contact03Page version={apiInfo.data.version}/>
      }
    </>
  );
}
