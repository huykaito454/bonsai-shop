import { createContext, useState, useContext } from "react";

const OpenAdsContext = createContext();

function OpenAdsProvider(props) {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <OpenAdsContext.Provider value={value} {...props}></OpenAdsContext.Provider>
  );
}

function useOpenAds() {
  const context = useContext(OpenAdsContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}
export { useOpenAds, OpenAdsProvider };
