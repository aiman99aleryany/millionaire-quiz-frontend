import { create } from 'zustand';
import INIT_QUESTIONS from './INIT_QUESTIONS';

const useQuestions = create((set) => ({
    questions: INIT_QUESTIONS,
}));

export default useQuestions;
