"use client"

import * as React from "react"
import CustomBarChart from "@/components/bar-chart";
import { Calendar } from "@/components/ui/calendar"
import CourseCard from "@/components/CourseCard";
import ImageCard from "@/components/ImageCard";

const fetchSpecialDays = async (): Promise<Date> => {
  const response = await fetch("Days.json");
  const data = await response.json();
  return new Date(data.joinDay);
};

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())


  const [joinDay, setJoinDay] = React.useState<Date>();
  // JSONから特別な日付を取得
  React.useEffect(() => {
    const getSpecialDays = async () => {
      const days = await fetchSpecialDays();
      setJoinDay(days);
    };
    getSpecialDays();
  }, []);


  return (
    <main className="p-24">
      <div>
<h2 className="font-medium text-2xl">
  ようこそ！Frontendコースへ
</h2>
<p className="py-4 mb-12">
このコースでは、最新の技術を駆使して魅力的なwebサイトを作成するスキルを身につけます。HTML、CSS、JavaScriptを基盤に、モダンでレスポンシブなデザインを実現し、ユーザーを惹きつけるインターフェースを構築します。<br/>
仲間たちと一緒に、創造性を発揮しながら実践的なプロジェクトに取り組みましょう。フロントエンド開発の楽しさを感じ、あなたのアイデアを形にする力を育んでいきます。<br/><br/><span className="italic font-medium">さあ、私たちと一緒に次世代のwebを作り上げる旅に出よう！</span>
</p>
      </div>
      <div className="flex gap-4 items-center"> 
      </div>
      <div className="flex gap-4 flex-row">
      <div className="flex flex-col gap-4"> 
      <CourseCard
      joinDay={joinDay}
      date={date}
      />
      <ImageCard/>
      </div>
      <div className="flex flex-col w-full gap-4">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      joinDay={joinDay}
      className="rounded-md border"
    />
    <CustomBarChart/>
      </div>
      </div>
    </main>
  );
}
