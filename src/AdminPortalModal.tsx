import React, { useState } from 'react';
import { Lock, X, Watch, ShieldCheck, CheckCircle2, DollarSign, Database, Award } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  passcode: string;
}

export const AdminPortalModal: React.FC<Props> = ({ isOpen, onClose, passcode }) => {
  const [inputCode, setInputCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'vault' | 'provenance' | 'escrow'>('vault');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim().toLowerCase() === passcode.toLowerCase()) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Master Horologist passkey. Click '[ AUTO-FILL DEMO KEY ]' to test.");
    }
  };

  const handleAutoFill = () => {
    setInputCode(passcode);
    setIsAuthenticated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0b0d13] border border-yellow-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center text-yellow-400">
              <Watch className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">Master Horologist Gate</h3>
              <p className="text-base text-zinc-300 mt-2">Enter your Geneva Atelier inspection passkey.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter horologist passkey..."
                className="w-full py-3 px-4 bg-zinc-900/90 border border-zinc-700 rounded-xl text-base text-white focus:border-yellow-400 outline-none min-h-[44px]"
              />
              <button
                type="submit"
                className="w-full py-3 px-5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:opacity-95 text-black font-bold rounded-xl text-base min-h-[44px] tracking-wider transition-all"
              >
                UNLOCK HOROLOGY VAULT
              </button>
            </form>
            <div className="pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={handleAutoFill}
                className="text-sm font-semibold text-yellow-400 hover:underline py-2 px-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30"
              >
                ⚡ [ AUTO-FILL DEMO KEY: {passcode} ]
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/30">
                  GENEVA ATELIER TELEMETRY
                </span>
                <h3 className="text-2xl font-bold text-white font-serif-luxury mt-2">AURA HOROLOGY — High Complication Vault</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('vault')}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold min-h-[44px] ${activeTab === 'vault' ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-300'}`}
                >
                  Timepiece Ledger
                </button>
                <button
                  onClick={() => setActiveTab('provenance')}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold min-h-[44px] ${activeTab === 'provenance' ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-300'}`}
                >
                  COSC Testing
                </button>
                <button
                  onClick={() => setActiveTab('escrow')}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold min-h-[44px] ${activeTab === 'escrow' ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-300'}`}
                >
                  Brink's Escrow
                </button>
              </div>
            </div>

            {activeTab === 'vault' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl">
                    <span className="text-xs text-zinc-400 font-medium">Vault Total Value</span>
                    <p className="text-3xl font-extrabold text-white mt-1">$4,850,000</p>
                    <span className="text-xs text-yellow-400 font-semibold">18 Holy Trinity Pieces</span>
                  </div>
                  <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl">
                    <span className="text-xs text-zinc-400 font-medium">Chronometer Accuracy</span>
                    <p className="text-3xl font-extrabold text-emerald-400 mt-1">+0.6 s/day</p>
                    <span className="text-xs text-zinc-300 font-medium">Exceeds COSC -4/+6 Standard</span>
                  </div>
                  <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl">
                    <span className="text-xs text-zinc-400 font-medium">Armored Holds</span>
                    <p className="text-3xl font-extrabold text-yellow-400 mt-1">3 Active</p>
                    <span className="text-xs text-zinc-300 font-medium">Brink's Zurich & NYC Vault</span>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-3">
                  <h4 className="text-lg font-bold text-white">Live Vault Ledger</h4>
                  <div className="divide-y divide-zinc-800">
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold text-white">Patek Philippe 5270P-001 (Platinum)</span>
                        <p className="text-sm text-zinc-300">Caliber CH 29-535 PS Q • Seal of Patek Philippe • Full Set</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        VAULT SECURED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'provenance' && (
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-3">
                <h4 className="text-lg font-bold text-yellow-400">Chronometer Inspection Telemetry</h4>
                <div className="space-y-2 text-base font-mono">
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-200">Witschi Chronoscope X1 Timing Log:</span>
                    <span className="font-bold text-emerald-400">Beat Error: 0.1ms • Amplitude: 312°</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-200">Escapement Lubrication:</span>
                    <span className="font-bold text-white">Moebius 9010 Synt-A-Lube (Fresh)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'escrow' && (
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-3">
                <h4 className="text-lg font-bold text-white">Armored Brink's Escrow Logistics</h4>
                <p className="text-base text-zinc-300">Fully insured armored transport with satellite GPS tracking and white-glove armed courier hand-delivery.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
