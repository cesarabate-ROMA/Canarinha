import React, { useState, useEffect } from 'react';
import { TriviaQuestion } from '../types';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TriviaPanelProps {
  questions: TriviaQuestion[];
  onUnlockPerfectScore: () => void;
}

export function TriviaPanel({ questions, onUnlockPerfectScore }: TriviaPanelProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentIdx] || questions[0];

  const handleOptionClick = (optIdx: number) => {
    if (submitted) return;
    setSelectedOpt(optIdx);
  };

  const handleSubmit = () => {
    if (selectedOpt === null || submitted || !currentQuestion) return;
    
    const isCorrect = selectedOpt === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
      setSubmitted(false);
    } else {
      setQuizFinished(true);
      const finalScore = score + (selectedOpt === currentQuestion?.correctAnswerIndex ? 1 : 0);
      if (finalScore === questions.length) {
        onUnlockPerfectScore();
      }
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Reset quiz when questions payload changes
  useEffect(() => {
    resetQuiz();
  }, [questions]);

  if (!currentQuestion) {
    return <div className="text-slate-400 text-xs text-center py-6">Cargando preguntas de trivia...</div>;
  }

  return (
    <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl text-white select-none h-full flex flex-col justify-between">
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-yellow-500" />
            <h2 className="text-lg font-bold text-slate-100">Trivia de la Estrella</h2>
          </div>
          <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full font-mono text-slate-300">
            {quizFinished ? 'Finalizado' : `Pregunta ${currentIdx + 1} de ${questions.length}`}
          </span>
        </div>

        {/* FINISHED VIEW */}
        {quizFinished ? (
          <div className="text-center py-6 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${score === questions.length ? 'bg-yellow-500/10 border-2 border-yellow-500 text-yellow-400' : 'bg-slate-800 text-slate-400'}`}>
              <Trophy className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-extrabold text-slate-100">
              {score === questions.length ? '¡Fabuloso! Campeón Absoluto' : '¡Buen intento!'}
            </h3>
            
            <p className="text-slate-300 text-sm mt-2 max-w-sm">
              Has respondido correctamente <span className="text-yellow-400 font-black font-mono">{score}</span> de <span className="font-bold">{questions.length}</span> preguntas oficiales.
            </p>

            {score === questions.length && (
              <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20">
                ⭐ Logro Desbloqueado: Especialista de Oro
              </span>
            )}

            <button
              onClick={resetQuiz}
              className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700/60 rounded-xl font-bold text-sm transition-all text-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
              Reintentar Trivia
            </button>
          </div>
        ) : (
          /* ACTIVE QUESTION VIEW */
          <div>
            <h3 className="font-extrabold text-base text-slate-100 mb-5 leading-snug">
              {currentQuestion.question}
            </h3>

            {/* OPTIONS */}
            <div className="space-y-2.5 mb-5">
              {currentQuestion.options.map((option, idx) => {
                let btnStyle = 'border-slate-800 bg-slate-950/30 hover:bg-slate-800/40 text-slate-200';
                
                if (selectedOpt === idx) {
                  btnStyle = 'border-yellow-500 bg-yellow-500/5 text-yellow-200';
                }

                if (submitted) {
                  if (idx === currentQuestion.correctAnswerIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-400';
                  } else if (selectedOpt === idx) {
                    btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-400';
                  } else {
                    btnStyle = 'border-slate-800/50 bg-slate-950/10 text-slate-500 pointer-events-none';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={submitted}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full p-3.5 border rounded-xl text-left font-semibold text-xs transition-all relative flex items-center justify-between group ${btnStyle}`}
                  >
                    <span>{option}</span>
                    <div className="flex items-center gap-1.5 min-w-[20px] shrink-0">
                      {submitted && idx === currentQuestion.correctAnswerIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      )}
                      {submitted && selectedOpt === idx && idx !== currentQuestion.correctAnswerIndex && (
                        <XCircle className="w-4 h-4 text-rose-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* EXPLANATION */}
            {submitted && (
              <motion.div 
                className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 flex gap-2.5 items-start mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-300 leading-normal">
                  <span className="font-bold text-indigo-400 uppercase tracking-widest block mb-0.5 font-mono">SABÍAS QUE...</span>
                  {currentQuestion.explanation}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* CONTROLS */}
      {!quizFinished && (
        <div className="border-t border-slate-800 pt-4 mt-4 flex justify-end">
          {!submitted ? (
            <button
              disabled={selectedOpt === null}
              onClick={handleSubmit}
              className={`px-5 py-2.5 font-bold text-xs rounded-xl transition-all uppercase tracking-wider ${selectedOpt === null ? 'bg-slate-850 text-slate-500 border border-slate-800' : 'bg-gradient-to-r from-yellow-500 to-amber-600 font-extrabold text-slate-950 hover:from-yellow-400 hover:to-amber-500'}`}
            >
              Comprobar Respuesta
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all uppercase tracking-wider"
            >
              {currentIdx + 1 === questions.length ? 'Finalizar Trivia' : 'Siguiente Pregunta'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
