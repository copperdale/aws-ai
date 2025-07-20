'use client';

import { Question } from "@/datas/questions";
import { Alert } from "antd";




export default function SortNotification({ questions }: { questions: Question[] }) {

  const questionNumbers  = questions
  .map((item, index) => 
    !item.question.startsWith("HOTSPOT") 
      ? 0 
      : index + 1)
  .filter(Boolean)
  .join();

  return (
    <Alert message={`第${questionNumbers} 题，是问答题，请查看原始PDF文件`} type="error" />
  )
}

