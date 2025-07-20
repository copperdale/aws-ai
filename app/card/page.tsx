'use client';


import { Typography, FloatButton, message, Flex, Button } from "antd";
import { Question, questions } from "../../datas/questions";
import SortNotification from "@/component/SortNotification";
import QuestionCard from "@/component/QuestionCard";
import { useLearning } from "@/hooks/useLearning";
import Referrence from "@/component/Referrence";


export default function Home() {

  const [messageApi, contextHolder] = message.useMessage();
  const {
    currentPage,
    selections,
    toggleSelections,
    showAnswer,
    errors,
    toggleErrors,
    updateCurrentPage,
    setSelections,
    setShowAnswer
  } = useLearning();

  return (
    <main className="flex flex-col gap-8 items-center justify-center">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 p-4">

        <div className="max-w-[1400px] w-full space-y-6 px-4 flex flex-col gap-4">
          <Referrence />
          <Typography.Title level={3}>
            {questions.length}题版 - [所有题目] - [{`${currentPage + 1}/${questions.length || 0}`}]
          </Typography.Title>
          <SortNotification questions={questions} />

          {
            questions
              .filter((q, index) => index === currentPage)
              .map((question) => {
                return (
                  <QuestionCard
                    key={question.question_id}
                    question={question}
                    selections={selections}
                    toggleSelections={toggleSelections}
                    showAnswer={showAnswer}
                    errors={errors}
                    onTag={(question: Question) => {
                      toggleErrors(question.question_id)
                    }}
                  />
                )
              })
          }
        </div>


      </div>


      <div className="fixed h-6 right-0 left-0 bottom-1 flex align-middle justify-center">
        <Flex gap="small" wrap className="">
          <Button type="primary" size="small" onClick={() => {
            updateCurrentPage((currentPage - 1 + questions.length) % questions.length);
          }}>上一题</Button>
          <Button type="primary" size="small" onClick={() => {
            updateCurrentPage((currentPage + 1) % questions.length);
          }} >下一题</Button>
          <Button type="primary" shape="round" size="small" onClick={() => {
            setSelections({});
            messageApi.open({
              type: 'success',
              content: '重置成功。',
              duration: 2,
            });
          }}>
            重置
          </Button>
          <Button type="primary" size="small" onClick={() => {
            setShowAnswer(!showAnswer);
          }}>
            答案
          </Button>

          <Button type="primary" size="small" href="/aws-ai/errors">
            错题集
          </Button>
        </Flex>
      </div>
      <FloatButton.BackTop shape="square" type="default" style={{ insetInlineEnd: 24 }} />

      {contextHolder}
    </main>
  );
}

