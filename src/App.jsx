// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, useNavigate, useLocation } from "react-router-dom";

import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
const pages = ["/", "/about", "/projects"];
const WHEEL_THRESHOLD = 120; // accumulate deltaY until this threshold
const LOCK_DURATION = 800; // ms lock after a navigation
const TOUCH_THRESHOLD = 60; // px required for swipe

function ScrollRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  // index synced to current pathname
  const [index, setIndex] = useState(Math.max(0, pages.indexOf(location.pathname)));
  const busyRef = useRef(false);
  const accRef = useRef(0); // accumulator for wheel deltas
  const lastNavRef = useRef(0);

  // touch handling refs
  const touchStartY = useRef(null);
  const touchMoved = useRef(false);

  // keep index in sync when user enters URL or uses back/forward
  useEffect(() => {
    const newIndex = pages.indexOf(location.pathname);
    if (newIndex >= 0) setIndex(newIndex);
  }, [location.pathname]);

  // helper to navigate safely
  const doNavigate = (targetIndex) => {
    if (busyRef.current) return;
    if (targetIndex < 0 || targetIndex >= pages.length) return;

    busyRef.current = true;
    lastNavRef.current = Date.now();

    navigate(pages[targetIndex]);
    // keep our local index in sync immediately for smooth transform
    setIndex(targetIndex);

    // release lock after LOCK_DURATION
    setTimeout(() => {
      busyRef.current = false;
    }, LOCK_DURATION);
  };

  // Wheel handler (desktop + trackpad)
  useEffect(() => {
    const handleWheel = (e) => {
      // accumulate vertical deltas (trackpads have small deltas)
      accRef.current += e.deltaY;

      if (Math.abs(accRef.current) >= WHEEL_THRESHOLD) {
        // clamp: positive deltaY means scroll down -> next page
        if (accRef.current > 0 && index < pages.length - 1) {
          doNavigate(index + 1);
        } else if (accRef.current < 0 && index > 0) {
          doNavigate(index - 1);
        }
        accRef.current = 0;
      }

      // reset accumulator if no wheel events for a short while (avoid leftover)
      clearTimeout(handleWheel._resetTimeout);
      handleWheel._resetTimeout = setTimeout(() => (accRef.current = 0), 120);
    };

    // passive:false allows preventDefault if desired (not used here)
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(handleWheel._resetTimeout);
    };
  }, [index, navigate]);

  // Touch handlers (mobile)
  useEffect(() => {
    const onTouchStart = (e) => {
      touchStartY.current = e.touches?.[0]?.clientY ?? null;
      touchMoved.current = false;
    };

    const onTouchMove = (e) => {
      if (touchStartY.current === null) return;
      touchMoved.current = true;
    };

    const onTouchEnd = (e) => {
      if (!touchMoved.current || touchStartY.current === null) {
        touchStartY.current = null;
        return;
      }
      const touchEndY = e.changedTouches?.[0]?.clientY ?? null;
      if (touchEndY === null) {
        touchStartY.current = null;
        return;
      }
      const diff = touchStartY.current - touchEndY; // positive -> swipe up (next)
      if (Math.abs(diff) > TOUCH_THRESHOLD) {
        if (diff > 0 && index < pages.length - 1) doNavigate(index + 1);
        else if (diff < 0 && index > 0) doNavigate(index - 1);
      }
      touchStartY.current = null;
      touchMoved.current = false;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, navigate]);

  // Keyboard navigation: ArrowDown / ArrowUp / PageDown / PageUp
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowDown", "PageDown"].includes(e.key) && index < pages.length - 1) {
        doNavigate(index + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key) && index > 0) {
        doNavigate(index - 1);
      } else if (e.key === "Home") {
        doNavigate(0);
      } else if (e.key === "End") {
        doNavigate(pages.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, navigate]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* horizontal slider */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{
          width: `${pages.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        <section className="w-screen h-screen flex-shrink-0">
          <HomePage />
        </section>

        <section className="w-screen h-screen flex-shrink-0">
          <About />
        </section>

        <section className="w-screen h-screen flex-shrink-0">
          <Projects />
        </section>
      </div>

      {/* optional page dots on the right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {pages.map((p, i) => (
          <button
            key={p}
            onClick={() => doNavigate(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-black/90" : "bg-black/30"}`}
            title={p}
            aria-label={`Go to ${p}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollRouter />
        <Navbar />
    </Router>
  );
}
