'use client';

import { Question } from "@/datas/questions";
import { FilePdfOutlined } from "@ant-design/icons";
import { Alert, Button, Flex } from "antd";




export default function Referrence() {


  return (
    <Flex gap="small" wrap>
      <Button
        type="primary"
        target="AWS+Certified+AI+Practitioner+AIF-C01+194题.pdf"
        href="/aws-ai/AWS+Certified+AI+Practitioner+AIF-C01+194题.pdf"
        icon={<FilePdfOutlined />}
      >
        PDF 194题
      </Button>
      <Button
        type="primary"
        target="AIF-C01ExamQ&A+224题.pdf"
        href="/aws-ai/AIF-C01ExamQ&A+224题.pdf"
        icon={<FilePdfOutlined />}
      >
        PDF 224题
      </Button>
      <Button
        type="primary"
        target="AIF-C01ExamQ&A+224题中文.pdf"
        href="/aws-ai/AIF-C01ExamQ&A+224题中文.pdf"
        icon={<FilePdfOutlined />}
      >
        PDF 224题（中文版，由AI翻译仅供参考）
      </Button>

    </Flex>
  )
}

