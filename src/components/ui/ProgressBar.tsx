"use client";

import { useEffect } from "react";
import NProgress from "nprogress";

export default function ProgressBar() {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
    });

    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
}