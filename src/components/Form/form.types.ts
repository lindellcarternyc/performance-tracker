interface FormHandler {
  label: string
}

interface FormHandlerWithAction<Data extends object> extends FormHandler {
  action: (data: Data) => void
}

interface FormHandlers<Data extends object> {
  submit: FormHandlerWithAction<Data>
  reset: FormHandler
}

interface FormField {
  initialValue: string
}

export type FormFieldGroup<Data extends object> = { [K in keyof Data]: FormField }

export type ChangeInputHandler<Data extends object> = (change: { name: keyof Data, value: string }) => void

interface ChangeHandlers<Data extends object> {
  input: ChangeInputHandler<Data>
}

export interface FormAPI<Data extends object> {
  data: Data
  change: ChangeHandlers<Data>
}

export interface FormProps<Data extends object> {
  title: string
  fields: FormFieldGroup<Data>

  children: (api: FormAPI<Data>) => React.ReactNode

  handlers: FormHandlers<Data>
}

export interface FormState<Data extends object> {
  data: Data
}