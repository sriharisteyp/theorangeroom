import { useEffect, useState } from "react";

const ReloadLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader as soon as React mounts
  const loader = document.getElementById("page-loader");
  if (loader && loader.parentNode) loader.parentNode.removeChild(loader);

  const t = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid" />
    </div>
  );
};

export default ReloadLoader;
