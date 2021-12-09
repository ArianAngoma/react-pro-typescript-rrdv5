import {Formik, Form} from 'formik';
import * as Yup from 'yup';

/* Importaciones propias */
import {MySelect, MyTextInput} from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    /* Si no tiene validaciones salir del ciclo */
    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form Page</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map(({type, name, placeholder, label, options}) => {
                                    if (type === 'input' || type === 'password' || type === 'email') {
                                        return (
                                            <MyTextInput
                                                key={name}
                                                type={(type as any)}
                                                name={name} label={label}
                                                placeholder={placeholder}
                                            />
                                        )
                                    } else if (type === 'select') {
                                        return (
                                            <MySelect
                                                key={name}
                                                label={label}
                                                name={name}>
                                                <option value="">Select an option</option>
                                                {
                                                    options?.map(({id, label}) => (
                                                        <option
                                                            key={id}
                                                            value={id}>
                                                            {label}
                                                        </option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }

                                    throw new Error(`El type: ${type} no es soportado`);
                                })
                            }

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
