const LabelInput = ({
  type,
  label,
  name,
  placeholder,
  onChange,
  value,
}: any) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          required
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-md outline-none border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default LabelInput;
