"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CountdownSection from "@/components/CountdownSection";
import EventDetails from "@/components/EventDetails";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import EntranceOverlay from "@/components/EntranceOverlay";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ScrollReveal>
      <EntranceOverlay onOpen={() => setIsPlaying(true)} />
      <AudioPlayer isPlaying={isPlaying} onToggle={setIsPlaying} />
      <main>
        <Hero />
        <CountdownSection />
        <EventDetails />
        <Timeline />
        <Gallery />
        <Footer />
      </main>
    </ScrollReveal>
  );
}
