import React, { useState } from "react";

function QuestionCard({ question }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === question.correctAnswer);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center mb-4">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <ul className="space-y-2">
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg cursor-pointer  ${
              selectedOption === option ? (isCorrect ? "bg-green-500" : "bg-red-500") : "bg-gray-700"
            } `}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;
