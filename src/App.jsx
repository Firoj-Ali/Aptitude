import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, nextPage, prevPage } from "./features/questionSlice";
import QuestionCard from "./components/QuestionCard";

function App() {
  const dispatch = useDispatch();
  const { questions, currentPage, category, questionsPerPage } = useSelector((state) => state.questions);

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => dispatch(setCategory("aptitude"))} className="px-4 py-2 bg-blue-600 rounded-lg">Aptitude</button>
        <button onClick={() => dispatch(setCategory("reasoning"))} className="px-4 py-2 bg-green-600 rounded-lg">Reasoning</button>
        <button onClick={() => dispatch(setCategory("verbal"))} className="px-4 py-2 bg-yellow-600 rounded-lg">Verbal</button>
      </div>
      <h1 className="text-2xl font-bold">{category.toUpperCase()} Questions</h1>
      {currentQuestions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500" onClick={() => dispatch(prevPage())}>Previous</button>
        <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500" onClick={() => dispatch(nextPage())}>Next</button>
      </div>
    </div>
  );
}

export default App;
