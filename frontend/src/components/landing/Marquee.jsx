import { motion } from "framer-motion";
import React from "react";

const items = ["We are Docly", "✦", "RAG Powered", "✦", "Ask. Explore.", "✦"];

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#FF6B35] overflow-hidden border-t border-b border-white/20">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((copy) => (
          <motion.div
            key={copy}
            className="flex shrink-0 items-center"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 16 }}
          >
            {items.map((item, i) => (
              <span
                key={i}
                className={`text-[10vw] font-Founders_Grotesk uppercase font-bold leading-none tracking-tighter mx-4 ${
                  item === "✦"
                    ? "text-white/40 text-[4vw]"
                    : i % 4 === 2
                    ? "text-transparent"
                    : "text-[#1a1a1a]"
                }`}
                style={
                  i % 4 === 2 && item !== "✦"
                    ? { WebkitTextStroke: "2px #1a1a1a" }
                    : {}
                }
              >
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
