import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ページ遷移時に先頭へスクロール（#form などのアンカー遷移時は維持）
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
