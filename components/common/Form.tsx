
const FormInput = ({
  formik,
  placeholder,
  name,
  label,
  type,optional
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
  type?: string;optional?:boolean
}) => {
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}{" "}{optional? <span className="text-blue-600 font-semibold">(optional)</span>:""}</div>
      <input
        type={type ?? "text"}
        className={`w-full p-3 px-5 border ${formik.errors[name] && formik.touched[name]?"border-red-500 outline-red-500":"border-blue-300 outline-blue-500"}  rounded-[10px] `}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormInput;

export function FormTextArea({
  formik,
  placeholder,
  name,
  label,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
}) {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    formik.setFieldValue(name, data);
  };
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}</div>
      <textarea
        className={`w-full p-3 px-5 border ${formik.errors[name] && formik.touched[name]?"border-red-500 outline-red-500":"border-blue-300 outline-blue-500"}  rounded-[10px] `}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder}
      ></textarea>
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
}