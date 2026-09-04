import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  projectTitle
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadReady(true);
    }, 1500);
  };

  const handleReset = () => {
    setDownloadReady(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg border rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--border-divider)' }}>
              <div className="flex items-center gap-2.5">
                <FileText className="text-[#D4AF37]" size={18} />
                <h3 className="text-sm font-serif text-[#D4AF37] tracking-wider uppercase">
                  Technical Project Dossier
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {downloadReady ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-serif text-white mb-2">Dossier Access Granted</h4>
                  <p className="text-xs mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    The complete engineering blueprint, PVSyst simulation, and financial model for <span className="text-[#D4AF37]">{projectTitle}</span> have been sent to your email.
                  </p>
                  <Button variant="gold" onClick={handleReset} fullWidth>
                    Close Window
                  </Button>
                </div>
              ) : isDownloading ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-5" />
                  <h4 className="text-lg font-serif text-[#D4AF37] mb-2">Generating Secure PDF...</h4>
                  <p className="text-xs tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Compiling single-line electrical diagrams & generation curves.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs leading-relaxed text-center mb-6" style={{ color: 'var(--text-muted)' }}>
                    Access complete engineering schematics, N-type cell specifications, inverter single-line diagrams, and estimated 25-year ROI forecasts for <span className="text-[#D4AF37] font-semibold">{projectTitle}</span>.
                  </p>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Corporate / Personal Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="elena@domain.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Contact Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. Your phone or WhatsApp"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-3">
                    <Button variant="gold" fullWidth type="submit" icon={<Download size={15} />}>
                      Download Technical Blueprint
                    </Button>
                    <p className="text-[10px] text-center mt-2.5 text-white/40">
                      Encrypted transmission • Direct certified engineering data
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
