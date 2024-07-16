/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
} & TFormConfig;

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
