import React, { useState } from "react";
import "./../css/Aps.css";

interface Grade {
  subject: string;
  level: number;
  percentage: number;
}

const Aps: React.FC = () => {
  const [grades, setGrades] = useState<Grade[]>([
    { subject: "", level: 0, percentage: 0 },
    { subject: "", level: 0, percentage: 0 },
    { subject: "", level: 0, percentage: 0 },
    { subject: "", level: 0, percentage: 0 },
    { subject: "", level: 0, percentage: 0 },
    { subject: "", level: 0, percentage: 0 },
  ]);

  const [totalLevels, setTotalLevels] = useState<number>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Grade
  ) => {
    const updatedGrades = [...grades];
    let value: number;

    if (field === "subject") {
      updatedGrades[index][field] = e.target.value;
    } else if (field === "level") {
      value = parseFloat(e.target.value);
      updatedGrades[index][field] = Math.min(Math.max(value, 0), 7);
    } else if (field === "percentage") {
      value = parseFloat(e.target.value);
      updatedGrades[index][field] = Math.min(Math.max(value, 0), 100);
    }

    setGrades(updatedGrades);
  };

  const calculateTotalLevels = () => {
    const levelsSum = grades.reduce(
      (total, grade) => total + Math.min(grade.level, 7),
      0
    );
    setTotalLevels(levelsSum);
  };

  const getApsMessage = () => {
    if (!totalLevels) {
      return "";
    } else if (totalLevels <= 14) {
      return `National Senior Certificate - your APS score  is ${totalLevels}`;
    } else if (totalLevels >= 15 && totalLevels < 19) {
      return `Higher Certificate Pass - your APS score  is ${totalLevels}`;
    } else if (totalLevels >= 19 && totalLevels < 23) {
      return `Diploma Pass - your APS score  is ${totalLevels}`;
    } else {
      return `Bachelors Pass - your APS score  is ${totalLevels}`;
    }
  };

  return (
    <div className="aps-calculator">
      <div className="aps-calculator-headings">
        <h1>APS SCORE CALCULATOR</h1>
        <div className="line"></div>
      </div>
      <div className="message">
        <p>
          In case you didn’t know, APS stands for Admission Point Score. In
          South Africa, universities and other tertiary institutions will often
          ask for this score in their application process. It is sometimes used
          as an entry requirement on application forms.
        </p>
      </div>
      <div className="two-column-layout">
        <div className="left-column">
          <table className="custom-table">
            <thead>
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Level</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td className="row-number">{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={grade.subject}
                      onChange={(e) => handleInputChange(e, index, "subject")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={grade.level}
                      onChange={(e) => handleInputChange(e, index, "level")}
                      onWheel={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </td>
                  <td>
                    <div className="percentage-input">
                      <input
                        type="number"
                        value={grade.percentage}
                        onChange={(e) =>
                          handleInputChange(e, index, "percentage")
                        }
                        onWheel={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={calculateTotalLevels}>CALCULATE</button>
        </div>
        <div className="right-column">
          <h4>RESULTS</h4>
          <p>{getApsMessage()}</p>
        </div>
      </div>
    </div>
  );
};

export default Aps;
