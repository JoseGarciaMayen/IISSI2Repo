'use_strict';
    
    import { BASE_URL, requestOptions } from './common.js';
    
    const employeesAPI ={
        /**
        * Gets currently logged employee.
        */
        getLogged: async function(){
            let response = await axios.get(`${BASE_URL}/employees/current`,requestOptions);
            return response.data[0];
        }
    }
    export {employeesAPI};