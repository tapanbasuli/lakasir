import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "../Ui/Fields/Input";

interface IPasswordInterface {
  label: string | JSX.Element;
  name: string;
}

const PasswordField = (props: IPasswordInterface) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const clickedEye = () => {
    const input = document.querySelector("#id-input-password");
    input?.setAttribute("type", eyeOpen ? "password" : "text");
    setEyeOpen(!eyeOpen);
  };
  useEffect(() => {}, [eyeOpen]);
  return (
    <>
      <Input
        name={props.name}
        type={"password"}
        label={props.label}
        className="pr-12"
        disable={{ errorIcon: true }}
        error="Error"
        append={
          <div
            className="absolute right-0 bg-transparent p-3 w-[3.5rem] rounded-r-lg cursor-pointer"
            onClick={clickedEye}
          >
            {eyeOpen ? (
              <EyeIcon className="text-gray-500" onClick={clickedEye} />
            ) : (
              <EyeOffIcon className="text-gray-500" onClick={clickedEye} />
            )}
          </div>
        }
      />
    </>
  );
};

export default PasswordField;