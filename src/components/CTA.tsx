// import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-black relative overflow-hidden">

      <motion.div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8 inline-flex items-center bg-white/10 rounded-full px-6 py-3">
          <Sparkles className="h-5 w-5 text-white mr-2" />
          <span className="text-sm font-medium text-white">Start Your Free Trial Today</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to transform your
          <br />
          <span className="text-gray-300">documentation workflow?</span>
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of teams who've already streamlined their documentation process with DocStar's AI-powered platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={() =>
              (window.location.href = "https://app.docstar.io/login")
            }
            className="group bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started for Free
            <ArrowRight className="h-5 w-5 ml-2" />
          </motion.button>

          <motion.button
            onClick={() =>
              (window.location.href = "https://cal.com/docstar-team")
            }
            className="text-white hover:text-gray-300 font-semibold text-lg px-8 py-4 rounded-xl border-2 border-white/30 hover:border-gray-300 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
