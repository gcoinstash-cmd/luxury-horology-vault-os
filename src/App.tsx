import React, { useState } from 'react';
import { 
  Watch, 
  ShieldCheck, 
  ZoomIn, 
  CheckCircle2, 
  Lock, 
  Award, 
  Calendar, 
  Compass, 
  FileCheck, 
  Eye, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal';

interface Timepiece {
  id: string;
  brand: string;
  model: string;
  reference: string;
  caseMaterial: string;
  price: number;
  caliber: string;
  frequency: string;
  powerReserve: string;
  jewels: number;
  hallmarks: string;
  accuracy: string;
  condition: string;
  images: {
    dial: string;
    caseback: string;
    movement: string;
    hallmark: string;
  };
}

const TIMEPIECES: Timepiece[] = [
  {
    id: 'w1',
    brand: 'PATEK PHILIPPE',
    model: 'Grand Complications Perpetual Calendar Chronograph',
    reference: '5270P-001',
    caseMaterial: '950 Platinum with Top Wesselton Diamond (6 o\'clock)',
    price: 218000,
    caliber: 'Manual Wind Caliber CH 29-535 PS Q',
    frequency: '28,800 vph (4 Hz)',
    powerReserve: '65 Hours',
    jewels: 33,
    hallmarks: 'Patek Philippe Seal, Geneva Key Platinum 950 Hallmark',
    accuracy: '+0.6 sec / 24 hours',
    condition: 'Unworn Mint (Complete 2024 Double Box & Certificate of Origin)',
    images: {
      dial: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      caseback: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
      movement: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      hallmark: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&w=1000&q=80'
    }
  },
  {
    id: 'w2',
    brand: 'AUDEMARS PIGUET',
    model: 'Royal Oak Extra-Thin "Jumbo" 50th Anniversary',
    reference: '16202ST.OO.1240ST.01',
    caseMaterial: 'Stainless Steel with Petite Tapisserie Bleu Nuit Nuage 50 Dial',
    price: 78500,
    caliber: 'Self-Winding Calibre 7121',
    frequency: '28,800 vph (4 Hz)',
    powerReserve: '55 Hours',
    jewels: 29,
    hallmarks: 'AP Monogram Rotor & Geneva Cotes Finishes',
    accuracy: '+0.8 sec / 24 hours',
    condition: 'Collector Grade (Original Audemars Piguet Warranty Card & Box)',
    images: {
      dial: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=80',
      caseback: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1000&q=80',
      movement: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      hallmark: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&w=1000&q=80'
    }
  },
  {
    id: 'w3',
    brand: 'ROLEX',
    model: 'Cosmograph Daytona 24 Hours of Le Mans Centennial',
    reference: '126529LN-0001',
    caseMaterial: '18k White Gold with Cerachrom Bezel (Red "100" Ceramic Indicator)',
    price: 245000,
    caliber: 'Perpetual Calibre 4132 Chronograph',
    frequency: '28,800 vph (4 Hz)',
    powerReserve: '72 Hours',
    jewels: 47,
    hallmarks: 'Superlative Chronometer Officially Certified',
    accuracy: '+0.4 sec / 24 hours',
    condition: 'Vault Pristine (Rolex Green Seal & White Tag)',
    images: {
      dial: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&w=1000&q=80',
      caseback: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
      movement: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      hallmark: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80'
    }
  }
];

export default function App() {
  const [selectedPiece, setSelectedPiece] = useState<Timepiece>(TIMEPIECES[0]);
  const [activeAngle, setActiveAngle] = useState<'dial' | 'caseback' | 'movement' | 'hallmark'>('dial');
  const [magnification, setMagnification] = useState<'1x' | '3x' | '10x'>('1x');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isEscrowLocked, setIsEscrowLocked] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090C] text-zinc-100 selection:bg-yellow-400 selection:text-black">
      
      {/* Top Banner & Geneva Passkey Gate */}
      <div className="bg-[#0e1017] border-b border-yellow-500/20 px-4 py-2.5 text-center text-sm font-semibold tracking-wider text-zinc-300 flex items-center justify-center gap-3">
        <span>⏱️ GENEVA HAUTE HORLOGERIE • PROVENANCE INSPECTION VAULT</span>
        <span className="text-zinc-600">•</span>
        <button
          onClick={() => setIsAdminOpen(true)}
          className="text-yellow-400 hover:text-yellow-300 font-mono text-xs font-semibold underline px-3 py-1 bg-yellow-500/10 rounded-md border border-yellow-500/30"
        >
          [ MASTER HOROLOGIST PASSKEY ]
        </button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#08090C]/90 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center text-yellow-400">
              <Watch className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-serif-luxury tracking-wider text-white">AURA HOROLOGY</h1>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-mono">Caliber Inspection Vault OS</p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-5 py-3 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-base font-semibold min-h-[44px] transition-all flex items-center gap-2"
          >
            <Lock className="w-4 h-4" /> Atelier Telemetry
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="py-10 px-4 sm:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full inline-block">
              ARCHETYPE E: SPLIT-SCREEN SPEC & PROVENANCE INSPECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight">
              Micro-Inspection <span className="text-yellow-400">& Caliber Specs</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-2xl">
              Chrono24 and WatchBox private salon architecture with 10x optical loupe macro zoom, Witschi timing telemetry, and encrypted blockchain provenance certificates.
            </p>
          </div>

          {/* Timepiece Picker Dropdown */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2 shrink-0">
            <span className="text-xs font-mono uppercase text-zinc-400 block">Switch Vault Piece:</span>
            <div className="flex flex-col gap-1.5">
              {TIMEPIECES.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPiece(p)}
                  className={`py-2 px-4 rounded-xl text-sm font-semibold text-left transition-all min-h-[44px] ${
                    selectedPiece.id === p.id 
                      ? 'bg-yellow-400 text-black font-bold' 
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  {p.brand} {p.reference} (${p.price.toLocaleString()})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Split-Screen Inspection Area */}
      <section className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: HIGH-RES MACRO INSPECTION (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              
              {/* Inspection Angle Selector */}
              <div className="absolute top-4 left-4 z-10 flex gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-zinc-700/60">
                {[
                  { id: 'dial', label: 'Dial & Hands' },
                  { id: 'caseback', label: 'Sapphire Back' },
                  { id: 'movement', label: 'Caliber Gears' },
                  { id: 'hallmark', label: 'Pt950 Hallmark' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAngle(tab.id as any)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all min-h-[36px] ${
                      activeAngle === tab.id ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Magnification Loupe Controls */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-zinc-700/60 font-mono text-xs">
                <span className="text-zinc-400 px-1">LOUPE:</span>
                {(['1x', '3x', '10x'] as const).map(mag => (
                  <button
                    key={mag}
                    onClick={() => setMagnification(mag)}
                    className={`py-1 px-2.5 rounded-lg transition-all ${
                      magnification === mag ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    {mag}
                  </button>
                ))}
              </div>

              {/* Main Image Viewport */}
              <div className="w-full h-[480px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPiece.images[activeAngle]}
                  alt={selectedPiece.model}
                  className={`w-full h-full object-cover transition-transform duration-500 cursor-crosshair ${
                    magnification === '3x' ? 'scale-150' : magnification === '10x' ? 'scale-[2.5]' : 'scale-100'
                  }`}
                />
              </div>

              {/* Viewport Footer Telemetry */}
              <div className="p-4 bg-zinc-900/90 border-t border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-300">
                <span>ANGLE: {activeAngle.toUpperCase()} • RESOLUTION: 8K RAW MACRO</span>
                <span className="text-emerald-400 font-bold">100% FACTORY ORIGINAL ZERO POLISH</span>
              </div>
            </div>

            {/* Condition & Provenance Card */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-yellow-400">
                <FileCheck className="w-5 h-5" />
                <h4 className="text-lg font-bold text-white font-serif-luxury">Provenance & Physical Condition Dossier</h4>
              </div>
              <p className="text-base text-zinc-200 leading-relaxed">{selectedPiece.condition}</p>
              <div className="pt-2 text-xs font-mono text-zinc-400">
                HALLMARK VERIFICATION: {selectedPiece.hallmarks}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL CALIBER SPECIFICATIONS & ESCROW (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header & Pricing */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono font-bold tracking-widest text-yellow-400 uppercase bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/30">
                  REF. {selectedPiece.reference}
                </span>
                <span className="text-2xl font-extrabold text-yellow-400 font-mono">
                  ${selectedPiece.price.toLocaleString()}
                </span>
              </div>

              <div>
                <span className="text-sm font-bold font-mono tracking-widest text-zinc-400">{selectedPiece.brand}</span>
                <h3 className="text-2xl font-bold font-serif-luxury text-white mt-1">{selectedPiece.model}</h3>
                <p className="text-sm text-zinc-300 mt-2">{selectedPiece.caseMaterial}</p>
              </div>

              {/* Caliber Specs Table */}
              <div className="pt-4 border-t border-zinc-800 space-y-2 text-sm font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Movement Model:</span>
                  <span className="font-bold text-white">{selectedPiece.caliber}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Balance Frequency:</span>
                  <span className="text-white">{selectedPiece.frequency}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Power Autonomy:</span>
                  <span className="text-white">{selectedPiece.powerReserve}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Jewel Count:</span>
                  <span className="text-white">{selectedPiece.jewels} Functional Rubies</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Chronometer Rate:</span>
                  <span className="font-bold text-emerald-400">{selectedPiece.accuracy}</span>
                </div>
              </div>

              {/* Armored Brink's Escrow Purchase Gate */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => setIsEscrowLocked(true)}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-yellow-400 to-amber-500 hover:opacity-95 text-black font-bold text-base min-h-[44px] rounded-xl transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" /> LOCK ARMORED BRINK'S ESCROW
                </button>

                <p className="text-xs text-zinc-400 text-center font-mono">
                  Funds held in Escrow.com vault until hand-inspection by authorized master watchmaker.
                </p>

                {isEscrowLocked && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-xl text-emerald-300 text-base font-semibold space-y-2">
                    <div className="flex items-center justify-between">
                      <span>🔒 Escrow Lock Initiated for {selectedPiece.brand} Ref. {selectedPiece.reference}!</span>
                      <button onClick={() => setIsEscrowLocked(false)} className="text-xs underline font-mono">Dismiss</button>
                    </div>
                    <p className="text-sm text-zinc-300 font-normal">
                      A secured wire instruction sheet and Brink's armored transport routing ID have been generated.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        passcode="horology2026"
      />
    </div>
  );
}
