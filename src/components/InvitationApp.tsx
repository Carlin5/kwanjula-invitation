"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeScreen from "./EnvelopeScreen";
import InvitationContent from "./InvitationContent";
import GoldenParticles from "./GoldenParticles";

export default function InvitationApp() {
  const [opened, setOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = useCallback(() => {
    setOpened(true);
    setTimeout(() => setShowContent(true), 1400);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <EnvelopeScreen key="envelope" opened={opened} onOpen={handleOpen} />
        ) : (
          <InvitationContent key="content" />
        )}
      </AnimatePresence>
      {showContent && <GoldenParticles />}
    </div>
  );
}
