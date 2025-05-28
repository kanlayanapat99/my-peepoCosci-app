import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  courses: {
    id: number;
    title: string;
    detail: string;
    picture: string;
    date: string;
    view: number;
  }[];
};

const Features05Page = ({ courses }: Props) => { 
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          Boost Your Strategy with Exploring Courses from CodingThailand
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col border rounded-xl overflow-hidden">
              <CardHeader>
                <Image src={course.picture} alt={course.title} width={400} height={160} className="object-cover rounded-md"/>
                <h4 className="mt-3 text-xl font-semibold">{course.title}</h4>
                <p className="text-muted-foreground">{course.detail}</p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Date: {course.date} <br />
                Views: {course.view.toLocaleString()}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
