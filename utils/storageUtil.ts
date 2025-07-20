export const StorageUtil = {
    getCurrentPage: (): number => {
        return  Number(localStorage.getItem("currentPage")) || 0;
    },
    setCurrentPage: (currentPage: number) => {
        localStorage.setItem("currentPage", `${currentPage}`);
    },
    getCurrentError: (): number => {
        return  Number(localStorage.getItem("currentError")) || 0;
    },
    setCurrentError: (currentError: number) => {
        localStorage.setItem("currentError", `${currentError}`);
    },
    getErrors: (): number[] => {
        return  JSON.parse(localStorage.getItem("errors") || '[]') || [];
    },
    setErrors: (errors: number[]) => {
        localStorage.setItem("errors", JSON.stringify(errors));
    },
    getSelections: (): Record<string, string[]> => {
        return  JSON.parse(localStorage.getItem("selections") || '{}') || [];
    },
    setSelections: (selections: Record<string, string[]>) => {
        localStorage.setItem("selections", JSON.stringify(selections));
    }
}
