'use client';

import { OptionKey, Question } from "@/datas/questions";
import { TagOutlined, QuestionCircleTwoTone } from "@ant-design/icons";
import { Card, Checkbox, Flex, Popover, Typography } from "antd";
import { SetStateAction } from "react";
import { Mode } from ".";

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};


export default function QuestionCard({
  question,
  selections,
  toggleSelections,
  showAnswer,
  errors,
  onTag
}: {
  question: Question;
  selections: Partial<Record<string, string[]>>;
  toggleSelections: (questionId: number, value: string[]) => void,
  showAnswer: boolean,
  errors: number[],
  onTag: (question: Question) => void
}) {

  return (
    <Card key={question.question_id} title={question.hasError ? <div className="text-red-700">这道题有错，请查看原始PDF</div> : null}>
      <Typography.Title level={4}>{`# ${question.question_id}. `}{question.question}</Typography.Title>

      <Checkbox.Group
        style={style}
        onChange={(values) => {
          toggleSelections(question.question_id, values);
        }}
        value={selections[question.question_id]}
        options={Object.keys(question.options).map(item => {
          const label = question.options[item as keyof typeof question.options];
          const isAnswer = question.correct_answer.includes(item as OptionKey);
          const answerClass = isAnswer && showAnswer ? "border-green-900 border-2 p-2" : "";
          const labelNode = <Typography className={answerClass}>{label}</Typography>
          return { label: labelNode, value: item }
        })}
      />
      <br />
      <br />
      <Flex gap="small" wrap>

        <TagOutlined
          className="text-2xl"
          style={{
            color: errors.includes(question.question_id) ? "#eb2f96" : ""
          }}
          onClick={() => onTag(question)}
        />
        <Popover trigger="click" content={<div><p>{question.explanation}</p></div>} title="explanation">
          <QuestionCircleTwoTone twoToneColor="#eb2f96" /> 这里查看解析
        </Popover>
      </Flex>
    </Card>
  )

}

