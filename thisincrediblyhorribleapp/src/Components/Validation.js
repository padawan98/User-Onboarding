import * as yup from 'yup';


    export default yup.object().shape({
        name:yup
        .string()
        .trim()//removes space after name in case person is stupid
        .required('Type in a name, dumbass'),
        password:yup
        .string()
        .required('Stop getting dumber! you need a goddamn passowordo *enters italian accent*')
        .min(6, "Bruh seriously can you stop? Like don't you know you need at least 6 characters? Go back to pre school pls : D"),
        email:yup
        .string()
        .email('I see throguh your lies. Give me an email or else o_o')
        .trim()
        .required("I said it's required get over yourself"),
        terms:yup
        .boolean()
        .oneOf([true],'Dude, pls. Gets annoying. Just read the terms'),    
    });

