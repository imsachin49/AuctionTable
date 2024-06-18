interface ContactInputProps {
    type: string;
    placeholder: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactInput({ type, placeholder, name,onChange }: ContactInputProps) {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="w-full rounded border border-stroke px-[14px] py-2 text-base text-body-color outline-none focus:border-primary"
      />
    </div>
  );
}