import { Control, Controller } from "react-hook-form";

import type { InputFieldProps } from "@/types/ui/input-field";

import InputField from "./index";

type Props = {
  control: Control<any>;
  name: string;
};

const InputFieldWithController = ({
  control,
  name,
  className = "",
  ...props
}: Props & InputFieldProps) => {
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputField
            value={value}
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default InputFieldWithController;
