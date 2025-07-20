import { questions } from "@/datas/questions";
import { StorageUtil } from "@/utils/storageUtil";
import { useCallback, useEffect, useState } from "react"

export const useLearning = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [currentError, setCurrentError] = useState<number>(0);
    const [errors, setErrors] = useState<number[]>([]);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [selections, setSelections] = useState<Record<string, string[]>>({});

    useEffect(() => {
        setCurrentPage(StorageUtil.getCurrentPage() || 0);
        setCurrentError(StorageUtil.getCurrentError() || 0);
        setErrors(StorageUtil.getErrors());
        setSelections(StorageUtil.getSelections());
    }, []);

    const updateCurrentPage = (page: number) => {
        setCurrentPage(page);
        StorageUtil.setCurrentPage(page);
    }

    const updateCurrentError = (error: number) => {
        setCurrentError(error);
        StorageUtil.setCurrentError(error);
    }
    const toggleSelections = (questionId: number, values: string[]) => {
        const latestSelections = {
            ...selections,
            [`${questionId}`]: values
        }
        setSelections(latestSelections);
        StorageUtil.setSelections(latestSelections);
    }

    const toggleErrors = (error: number) => {
        let latestErrors: number[];
        if (errors?.includes(error)) {
            latestErrors = errors.filter(item => item !== error);
        } else {
            latestErrors = [...errors, error];
        }
        setErrors(latestErrors);
        StorageUtil.setErrors(latestErrors);
    }

    const markedQuestions = questions.filter(item => errors.includes(item.question_id));

    return {
        currentError,
        errors,
        currentPage,
        updateCurrentError,
        toggleErrors,
        updateCurrentPage,
        showAnswer,
        setShowAnswer,
        markedQuestions,
        toggleSelections,
        selections,
        setSelections
    }

}