'use client';


import { Card, Typography, Checkbox, FloatButton, message } from "antd";
import { questions, type OptionKey } from "./questions";
import { useState } from "react";

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

enum Mode {
  Study = "正在学习",
  Simulate = "正在模拟",
}

export default function Home() {

  const [messageApi, contextHolder] = message.useMessage();

  const [selections, setSelections] = useState<Partial<Record<string, OptionKey[]>>>({});
  const [mode, setMode] = useState<Mode>(Mode.Simulate);
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[1400px] w-full space-y-6 px-4 flex flex-col gap-4">
          <Typography.Title level={3}>AWS+Certified+AI+Practitioner（AIF-C01）.pdf</Typography.Title>
          {
            questions.map((question) => {
              return (
                <Card key={question.question_id} title={question.hasError ? <div className="text-red-700">这道题有错，请查看原始PDF</div> : null}>
                  <Typography.Title level={4}>{`# ${question.question_id}. `}{question.question}</Typography.Title>

                  <Checkbox.Group
                    style={style}
                    onChange={(values) => {
                      setSelections({ ...selections, [question.question_id]: values })
                    }}
                    value={selections[question.question_id]}
                    options={Object.keys(question.options).map(item => {
                      const label = question.options[item as keyof typeof question.options];
                      const isAnswer = question.correct_answer.includes(item as OptionKey);
                      const answerClass = isAnswer && mode === Mode.Study ? "border-green-900 border-2 p-2" : "";
                      const labelNode = <Typography className={answerClass}>{label}</Typography>
                      return { label: labelNode, value: item }
                    })}
                  />
                </Card>
              )
            })
          }



        </div>
      </div>

      <FloatButton.BackTop shape="square" type="default" style={{ insetInlineEnd: 24 }} />
      <FloatButton description={mode} type="default" shape="square" style={{ insetInlineEnd: 70 }} onClick={() => {
        setMode(mode === Mode.Study ? Mode.Simulate : Mode.Study)
      }} />
      <FloatButton description="重置" type="primary" shape="square" style={{ insetInlineEnd: 116 }} onClick={() => {
        setMode(Mode.Simulate);
        setSelections({});
        messageApi.open({
          type: 'success',
          content: '重置成功。',
          duration: 2,
        });
      }} />
      {contextHolder}
    </main>
  );
}

