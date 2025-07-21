"use client";

interface ITextInputProps {
  handleInputChange: (value: string) => void;
  label: string;
  value: string;
  textarea?: boolean;
  name: string;
  type?: "text" | "email";
}

const TextInput: React.FC<ITextInputProps> = ({
  handleInputChange,
  label,
  value,
  name,
  textarea = false,
  type = "text",
}) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        type={type}
        className="w-full resize-none rounded-xl border border-gray-300 bg-white/80 px-4 pt-6 pb-4 text-gray-900 transition-all duration-300 outline-none focus:border-blue-500 focus:bg-white dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-gray-800/70"
        value={value}
        name={name}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <label className="pointer-events-none absolute top-2 left-4 origin-left text-sm">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
