import './DisplayBoard.css';
import i from '../../Info';
import { useState } from 'react';
import DisplayText from '../DisplayText/DisplayText';

const ShowCheckerBoard = () => {
  return (
    <>
      <DisplayText color="#81671F" heading={i.checkerBoard.heading} />
      <checker-board></checker-board>
      <DisplayText color="#81671F" text={i.checkerBoard.text} />
    </>
  );
};

const ShowChessBoard = () => {
  return (
    <>
      <DisplayText color="#81671F" heading={i.chessBoard.heading} />
      <chess-board></chess-board>
      <DisplayText color="#81671F" text={i.chessBoard.text} />
    </>
  );
};

const ShowAnalysisBoard = () => {
  return (
    <>
      <DisplayText color="#81671F" heading={i.analysisBoard.heading} />
      <analysis-board></analysis-board>
      <DisplayText color="#81671F" text={i.analysisBoard.text} />
    </>
  );
};

const ToggleBoard = ({
  showCheckers,
  showChess,
  showAnalysis,
  handleCheckers,
  handleChess,
  handleAnalysis,
}) => {
  return (
    <>
      <div className="filler" style={{ backgroundColor: '#81671F' }}></div>
      <div className="toggle-container">
        <div
          onClick={handleCheckers}
          className={`toggler ${showCheckers ? 'highlight' : ''}`}
        >
          <p className="toggle-text">{'<checker-board>'}</p>
        </div>
        <div
          onClick={handleChess}
          className={`toggler ${showChess ? 'highlight' : ''}`}
        >
          <p className="toggle-text">{'<chess-board>'}</p>
        </div>
        <div
          onClick={handleAnalysis}
          className={`toggler ${showAnalysis ? 'highlight' : ''}`}
        >
          <p className="toggle-text">{'<analysis-board>'}</p>
        </div>
      </div>
    </>
  );
};

const DisplayBoard = () => {
  const [showCheckers, setShowCheckers] = useState(true);
  const [showChess, setShowChess] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const onCheckersClick = () => {
    setShowCheckers(true);
    setShowChess(false);
    setShowAnalysis(false);
  };
  const onChessClick = () => {
    setShowCheckers(false);
    setShowChess(true);
    setShowAnalysis(false);
  };
  const onAnalysisClick = () => {
    setShowCheckers(false);
    setShowChess(false);
    setShowAnalysis(true);
  };

  if (showCheckers) {
    return (
      <div className="display-container">
        <ToggleBoard
          showCheckers={showCheckers}
          showChess={showChess}
          showAnalysis={showAnalysis}
          handleCheckers={onCheckersClick}
          handleChess={onChessClick}
          handleAnalysis={onAnalysisClick}
        />
        <ShowCheckerBoard />
      </div>
    );
  } else if (showChess) {
    return (
      <div className="display-container">
        <ToggleBoard
          showCheckers={showCheckers}
          showChess={showChess}
          showAnalysis={showAnalysis}
          handleCheckers={onCheckersClick}
          handleChess={onChessClick}
          handleAnalysis={onAnalysisClick}
        />
        <ShowChessBoard />
      </div>
    );
  } else if (showAnalysis) {
    return (
      <div className="display-container">
        <ToggleBoard
          showCheckers={showCheckers}
          showChess={showChess}
          showAnalysis={showAnalysis}
          handleCheckers={onCheckersClick}
          handleChess={onChessClick}
          handleAnalysis={onAnalysisClick}
        />
        <ShowAnalysisBoard />
      </div>
    );
  }
};

export default DisplayBoard;
