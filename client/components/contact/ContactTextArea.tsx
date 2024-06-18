import React from "react";

interface ContactTextAreaProps {
  row: number;
  placeholder: string;
  name: string;
  defaultValue: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ContactTextArea({
  row,
  placeholder,
  name,
  defaultValue,
  onChange
}: any) {
  return (
    <div className="mb-3">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
        defaultValue={defaultValue}
      />
    </div>
  );
}
