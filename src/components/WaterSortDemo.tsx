import { useState } from 'react';
import {
  Tube,
  COLOR_STYLES,
  TUBE_CAPACITY,
  createInitialPuzzle,
  canPour,
  pourLiquid,
  checkWinCondition,
} from '../utils/waterSortGame';
import { sounds } from '../utils/soundEffects';
import { Volume2, VolumeX, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';
import { getSedoListingUrl } from '../utils/domainOffer';
import { AdsterraSkyscraper } from './AdsterraAds';

export function WaterSortDemo() {
  const [tubes, setTubes] = useState<Tube[]>(createInitialPuzzle);
  const [history, setHistory] = useState<Tube[][]>([]);
  const [selectedTubeIndex, setSelectedTubeIndex] = useState<number | null>(null);
  const [hasWon, setHasWon] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [movesCount, setMovesCount] = useState(0);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
  };

  const handleReset = () => {
    setTubes(createInitialPuzzle());
    setHistory([]);
    setSelectedTubeIndex(null);
    setHasWon(false);
    setMovesCount(0);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setTubes(previous);
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setSelectedTubeIndex(null);
    setMovesCount((m) => Math.max(0, m - 1));
  };

  const handleTubeClick = (index: number) => {
    if (hasWon) return;

    if (selectedTubeIndex === null) {
      if (tubes[index].layers.length === 0) return;
      setSelectedTubeIndex(index);
      sounds.playSelect();
    } else if (selectedTubeIndex === index) {
      setSelectedTubeIndex(null);
    } else {
      if (canPour(tubes, selectedTubeIndex, index)) {
        setHistory((prev) => [...prev, tubes]);
        const result = pourLiquid(tubes, selectedTubeIndex, index);
        setTubes(result.newTubes);
        setSelectedTubeIndex(null);
        setMovesCount((m) => m + 1);
        sounds.playPour();

        if (checkWinCondition(result.newTubes)) {
          setHasWon(true);
          sounds.playWin();
        }
      } else {
        if (tubes[index].layers.length > 0) {
          setSelectedTubeIndex(index);
          sounds.playSelect();
        } else {
          setSelectedTubeIndex(null);
        }
      }
    }
  };

  const sedoUrl = getSedoListingUrl('watersort.in');

  return (
    <section id="demo" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Interactive Test
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Try the Water Sort Puzzle
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Click a tube to select, then click another tube to pour matching colors. This simple, satisfying game is played by millions every day.
          </p>
        </div>

        {/* Puzzle and Skyscraper Flex Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Puzzle Box */}
          <div className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs relative">
          {/* Controls */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-slate-600">
              <span>
                Moves: <strong className="text-slate-900 tabular-nums">{movesCount}</strong>
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 hidden sm:inline">Tap tube to pick up, tap another to pour</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleUndo}
                disabled={history.length === 0 || hasWon}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Undo
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              <button
                type="button"
                onClick={toggleSound}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
                aria-label={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              </button>
            </div>
          </div>

          {/* Test Tubes Display */}
          <div className="py-8 flex flex-wrap items-end justify-center gap-4 sm:gap-6 min-h-[260px]">
            {tubes.map((tube, idx) => {
              const isSelected = selectedTubeIndex === idx;
              const isFull = tube.layers.length === TUBE_CAPACITY;
              const isUniform =
                isFull && tube.layers.every((c) => c === tube.layers[0]);

              return (
                <button
                  key={tube.id}
                  type="button"
                  onClick={() => handleTubeClick(idx)}
                  className={`group relative flex flex-col justify-end items-center cursor-pointer transition-all duration-200 focus:outline-none ${
                    isSelected ? '-translate-y-3' : 'hover:-translate-y-1'
                  }`}
                  aria-label={`Tube ${tube.id}, contains ${tube.layers.length} of ${TUBE_CAPACITY} layers`}
                >
                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-600 font-bold text-[11px] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200 animate-bounce">
                      Pour
                    </div>
                  )}

                  {/* Glass Vial Shell */}
                  <div
                    className={`w-13 sm:w-15 h-44 sm:h-48 rounded-b-3xl rounded-t-lg border-2 relative overflow-hidden backdrop-blur-xs transition-all duration-200 ${
                      isSelected
                        ? 'border-blue-600 shadow-md bg-white'
                        : isUniform
                        ? 'border-emerald-500 shadow-xs bg-emerald-50/20'
                        : 'border-slate-300 hover:border-slate-400 bg-white'
                    }`}
                  >
                    {/* Glass reflections */}
                    <div className="absolute inset-y-0 left-1 w-0.5 bg-white/40 rounded-full pointer-events-none z-20" />

                    {/* Liquid Layers */}
                    <div className="absolute bottom-0 inset-x-0 flex flex-col-reverse w-full">
                      {tube.layers.map((color, layerIdx) => {
                        const style = COLOR_STYLES[color];
                        return (
                          <div
                            key={layerIdx}
                            className={`h-10 sm:h-11 w-full transition-all duration-300 relative border-t ${style.border} ${style.bg}`}
                          >
                            <div className="absolute top-0 inset-x-0 h-0.5 bg-white/30" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tube Base */}
                  <div className="w-14 sm:w-16 h-2 bg-slate-200 rounded-full mt-2" />
                </button>
              );
            })}
          </div>

          {/* Win State Overlay */}
          {hasWon && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center p-6 text-center z-30">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                Puzzle Solved!
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-5">
                Millions of casual gamers love this game mechanic. Launch your gaming site or app on <strong>watersort.in</strong> today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={sedoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Buy on Sedo ($800)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          </div>

          {/* Adsterra 160x300 Skyscraper Slot */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-xs shrink-0 w-[190px]">
            <AdsterraSkyscraper />
          </div>
        </div>
      </div>
    </section>
  );
}
