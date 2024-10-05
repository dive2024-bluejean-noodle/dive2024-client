import { PiBell, PiMagnifyingGlass } from "react-icons/pi";

const languageList = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Chinese",
    value: "zh",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
  {
    label: "Indian",
    value: "hi",
  },
] as const;

export default function FilteringHeader({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (value: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  return (
    <header
      className={
        "w-full h-60 flex items-center justify-between border-b-1 bg-white"
      }>
      <select
        className={"px-16 py-8 focus:outline-none text-20 w-fit bg-white"}
        value={language}
        onChange={handleChange}>
        {languageList.map((item) => (
          <option key={item.value} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>

      <div className={"flex items-center"}>
        <button className={"p-16"}>
          <PiMagnifyingGlass size={24} />
        </button>
        <button className={"p-16"}>
          <PiBell size={24} />
        </button>
      </div>
    </header>
  );
}
